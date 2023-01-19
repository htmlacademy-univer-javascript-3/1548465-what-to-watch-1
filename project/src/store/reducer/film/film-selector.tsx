import { Film } from '../../../types/film/film.type';
import { State } from '../../../types/state.type';
import { Namespace } from '../../../constants/routes';
import { Review } from '../../../types/review/review.type';

export const getFilm = (state: State): Film | null => state[Namespace.Film].film;
export const getSimilarFilm = (state: State): Film[] => state[Namespace.Film].similarFilms;
export const getReviews = (state: State): Review[] => state[Namespace.Film].reviews;
