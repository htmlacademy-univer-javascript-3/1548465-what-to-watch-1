import UserBlock from '../../components/user-block/user-block';
import React, { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { Film } from '../../types/film/film.type';
import { api } from '../../store';
import { WebRoutes } from '../../constants/webRoutes';
import Logo from '../../components/logo/logo';
import { redirectToRoute } from '../../store/action';
import { fetchFilmById } from '../../store/api-action';
import NotFoundPage from '../not-found/not-found-page';
import AddReview from '../../components/add-review/add-review';

const AddReviewPage: FC = () => {
  const params = useParams();
  const filmId = Number(params.filmId);
  const [film, setFilm] = useState<null | Film>(null);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    api.get<Film>(`/films/${id || -1}`).then(({ data }) => {
      if (data) {
        dispatch(fetchFilmById(data.id));
        setFilm(data);
      } else {
        dispatch(redirectToRoute(WebRoutes.NOTFOUND));
      }
    });
  }, [dispatch, id, filmId]);

  if (!film) {
    return <NotFoundPage/>;
  }

  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film.backgroundImage} alt={film.name}/>
        </div>
        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo/>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${film.id}`} className='breadcrumbs__link'>
                  {film.name}
                </Link>
              </li>
              <li className='breadcrumbs__item'>
                <Link to={`/films/${film.id}/review`} className='breadcrumbs__link'>
                  Add review
                </Link>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img
            src={film.posterImage}
            alt={film.name}
            width='218'
            height='327'
          />
        </div>
      </div>
      <div className="add-review">
        <AddReview/>
      </div>
    </section>
  );
};

export default AddReviewPage;
