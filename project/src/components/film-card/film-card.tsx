import React from 'react';

type FilmCardProps = {
  image: string;
  name: string;
  href: string;
}

export default function FilmCard(props: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.image} alt={props.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={props.href}>{props.name}</a>
      </h3>
    </article>
  );
}
