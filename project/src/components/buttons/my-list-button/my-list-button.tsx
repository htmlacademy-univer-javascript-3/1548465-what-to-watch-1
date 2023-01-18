import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { Film } from '../../../types/film/film.type';
import { getFavoriteFilms, getPromoFilm } from '../../../store/reducer/main/main-selector';
import { getFavoriteFilmsAction, fetchPromoFilm, setFavoriteFilmAction, fetchFilmById } from '../../../store/api-action';

type MyListButtonProps = {
  film: Film|null;
}

export default function MyListButton(props: MyListButtonProps) {
  const {film} = props;
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const promoFilm = useAppSelector(getPromoFilm);

  const favoriteAddHandler = () => {
    const status = Number(!film?.isFavorite);
    const filmId = Number(film?.id);
    dispatch(setFavoriteFilmAction({ id: filmId, status: status }));
    dispatch(getFavoriteFilmsAction());
    if (filmId) {
      dispatch(fetchFilmById(Number(filmId)));
    }
    if (filmId === promoFilm?.id) {
      dispatch(fetchPromoFilm());
    }
  };
  const favoriteFilmsCount = favoriteFilms.length;
  const isFavorite = film?.isFavorite;

  return (
    <button className="btn btn--list film-card__button" onClick={favoriteAddHandler}>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}/>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilmsCount}</span>
    </button>
  );
}
