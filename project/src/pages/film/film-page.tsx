import { Footer } from '../../components/footer/footer';
import { Link, useParams } from 'react-router-dom';
import React, { FC, useEffect, useState } from 'react';
import { Film } from '../../types/film/film.type';
import FilmList from '../../components/film-list/film-list';
import Tabs from '../../components/tabs/tabs';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Review } from '../../types/review/review.type';
import Loader from '../../components/loader/loader';
import { ROUTES } from '../../constants/routes';
import { StatusCodes } from 'http-status-codes';
import { AxiosError } from 'axios';
import { api } from '../../store';
import Header from '../../components/header/header';
import { AuthorizationStatus } from '../../types/authorization/authorization-status.enum';
import { redirectToRoute } from '../../store/action';
import { getAuthorizationStatus } from '../../store/reducer/user/user-selector';
import PlayButton from '../../components/play-button/play-button';
import MyListButton from '../../components/my-list-button/my-list-button';


const FilmPage: FC = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [film, setFilm] = useState<null | Film>(null);
  const [similarFilms, setSimilarFilms] = useState<null | Film[]>(null);
  const [reviews, setReviews] = useState<null | Review[]>(null);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scroll({top: 0, behavior: 'smooth'});

    const fetchFilm = async () => {
      const { data: filmInfo } = await api.get<Film>(`/films/${id || -1}`);
      setFilm(filmInfo);
    };
    const fetchSimilarFilms = async () => {
      const { data: films } = await api.get<Film[]>(`/films/${id || -1}/similar`);
      setSimilarFilms(films);
    };
    const fetchFilmReviews = async () => {
      const { data: filmReviews } = await api.get<Review[]>(`/comments/${id || -1}`);
      setReviews(filmReviews);
    };

    setDataLoaded(false);
    fetchFilm()
      .then(() => fetchSimilarFilms())
      .then(() => fetchFilmReviews())
      .then(() => setDataLoaded(true))
      .catch((err: AxiosError) => {
        if (err.response && err.response.status === StatusCodes.NOT_FOUND) {
          dispatch(redirectToRoute(ROUTES.NOTFOUND));
        }
      });
  }, [id]);

  if (!dataLoaded) {
    return <Loader />;
  }
  return (
    <>
      <section className='film-card film-card--full'>
        <div className='film-card__hero'>
          <div className='film-card__bg'>
            <img src={`img/${film?.posterImage ?? ''}`} alt={film?.title}/>
          </div>
          <h1 className='visually-hidden'>WTW</h1>

          <Header />

          <div className='film-card__wrap'>
            <div className='film-card__desc'>
              <h2 className='film-card__title'>{film?.title}</h2>
              <p className='film-card__meta'>
                <span className='film-card__genre'>{film?.genre}</span>
                <span className='film-card__year'>{film?.releaseYear}</span>


              </p>

              <div className='film-card__buttons'>
                <Link to={`/player/${film?.id ?? 0}`} className="btn btn--play film-card__button">
                  <PlayButton isPlay/>
                </Link>
                { authorizationStatus === AuthorizationStatus.Auth ? <MyListButton film={film}/> : null }
                {
                  authorizationStatus === AuthorizationStatus.Auth &&
                  <a href={id ? `/films/${id}/review` : '#'} className="btn film-card__button">Add review</a>
                }
              </div>
            </div>
          </div>
        </div>

        <div className='film-card__wrap film-card__translate-top'>
          <div className='film-card__info'>
            <div className='film-card__poster film-card__poster--big'>
              <img src={film?.posterImage} alt={film?.title} width='218' height='327'/>
            </div>
            {film && reviews && <Tabs film={film} reviews={reviews} />}
          </div>
        </div>
      </section>

      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>
          {similarFilms && <FilmList films={similarFilms} />}
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FilmPage;
