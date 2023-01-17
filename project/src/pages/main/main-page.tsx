import React from 'react';
import FilmCard from '../../components/film-card/film-card';
import Header from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { genres } from '../../constants/genres';
import { films } from '../../constants/films';

type FilmProps = {
  name: string;
  genre: string;
  releaseYear: number;
  imagePath: string;
}

export default function MainPage(props: FilmProps) {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.imagePath} alt={props.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={'img/the-grand-budapest-hotel-poster.jpg'}
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.releaseYear}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            {
              genres.map((item) => (
                <li className="catalog__genres-item catalog__genres-item--active" key={item}>
                  <a href="#" className="catalog__genres-link">{item}</a>
                </li>))
            }
          </ul>

          <div className="catalog__films-list">
            {
              films.map((film) =>
                <FilmCard {...film} key={film.name}/>)
            }
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}
