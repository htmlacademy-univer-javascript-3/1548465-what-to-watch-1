import { FC } from 'react';
import { Film } from '../../../types/film/film.type';

type FilmOverviewTabProps = {
  film: Film;
}

function getRatingLevelByRatingCount(rating: number): string {
  if (rating < 3) {
    return 'Bad';
  } else if (rating < 5) {
    return 'Normal';
  } else if (rating < 8) {
    return 'Good';
  } else if (rating < 10) {
    return 'Very good';
  } else if (rating === 10) {
    return 'Awesome';
  } else {
    return 'Wrong';
  }
}

const FilmOverviewTab: FC<FilmOverviewTabProps> = (props) => {
  const { film } = props;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating ?? 0}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getRatingLevelByRatingCount(film.rating)}
          </span>
          <span className="film-rating__count">
            {film.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        {film?.description ?? ''}
        <p className="film-card__director"><strong>Director: {film?.director ?? ''}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film?.starring.join(', ') ?? []} and other</strong></p>
      </div>
    </>
  );
};
export default FilmOverviewTab;
