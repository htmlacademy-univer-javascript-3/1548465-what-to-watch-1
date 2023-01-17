import React, { FC } from 'react';
import { FilmShort } from '../../types/film-short.type';
import { Link } from 'react-router-dom';

export type FilmCardProps = {
  film: FilmShort;
}

const FilmCard: FC<FilmCardProps> = (props) => {
  const { film } = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.imagePath} alt={film.title} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>{film.title}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
