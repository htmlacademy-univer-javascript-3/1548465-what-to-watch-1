import React from 'react';

export type FilmCardProps = {
  name: string;
  imagePath: string;
}

export default function FilmCard(props: FilmCardProps) {
  const {imagePath, name} = props;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={imagePath} alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" >{name}</a>
      </h3>
    </article>
  );
}
