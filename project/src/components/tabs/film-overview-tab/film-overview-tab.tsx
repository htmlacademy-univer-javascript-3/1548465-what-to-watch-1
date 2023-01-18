import {FC} from 'react';
import { Film } from '../../../types/film.type';

type FilmOverviewTabProps = {
  film: Film;
}

const FilmOverviewTab: FC<FilmOverviewTabProps> = (props) => {
  const { film } = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{film.reviewsCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {film.description}
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.actors.join(',')} and other</strong></p>
      </div>
    </>
  );
};
export default FilmOverviewTab;
