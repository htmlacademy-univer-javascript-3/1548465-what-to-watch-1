import React, { FC, useState } from 'react';
import Header from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import FilmList from '../../components/film-list/film-list';
import { useAppSelector } from '../../hooks/hooks';
import { ALL_GENRES, SHOWN_FILMS_STEP } from '../../constants/constants';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show_more/show-more';
import { AuthorizationStatus } from '../../types/authorization/authorization-status.enum';
import { Link } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/reducer/user/user-selector';
import { getActiveGenre, getFilms, getPromoFilm } from '../../store/reducer/main/main-selector';
import PlayButton from '../../components/play-button/play-button';
import MyListButton from '../../components/my-list-button/my-list-button';

const MainPage: FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const films = useAppSelector(getFilms);
  const activeGenre = useAppSelector(getActiveGenre);
  const film = useAppSelector(getPromoFilm);
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(SHOWN_FILMS_STEP);
  const genres = [ALL_GENRES].concat([...new Set(films.map((f) => f.genre))]);
  const filteredFilms = films
    .filter((f) => f.genre === activeGenre || activeGenre === ALL_GENRES)
    .slice(0, visibleFilmsCount);

  const showMoreClick = () => {
    setVisibleFilmsCount(visibleFilmsCount + SHOWN_FILMS_STEP);
  };

  return (
    <>
      <section className="film-card">
        <Header />
        <div className="film-card__bg">
          <img src={film?.posterImage} alt={film?.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={film?.posterImage}
                alt={film?.title}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{film?.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film?.genre}</span>
                <span className="film-card__year">{film?.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film?.id ?? 0}`} className="btn btn--play film-card__button">
                  <PlayButton isPlay/>
                </Link>
                { authorizationStatus === AuthorizationStatus.Auth ? <MyListButton film={film}/> : null }
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres={genres} activeGenre={activeGenre}/>

          <div className="catalog__films-list">
            <FilmList films={filteredFilms}/>
          </div>

          { filteredFilms.length % SHOWN_FILMS_STEP === 0 && <ShowMore onClick={showMoreClick}/> }
        </section>

        <Footer/>
      </div>
    </>
  );
};

export default MainPage;
