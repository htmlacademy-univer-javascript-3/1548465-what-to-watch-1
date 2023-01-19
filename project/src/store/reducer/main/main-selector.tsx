import { State } from '../../../types/state.type';
import { Film } from '../../../types/film/film.type';
import { Namespace } from '../../../constants/webRoutes';


export const getFilms = (state: State): Film[] => state[Namespace.Data].films;
export const getPromoFilm = (state: State): Film | null => state[Namespace.Data].promoFilm;
export const getActiveGenre = (state: State): string => state[Namespace.Data].activeGenre;
export const getIsLoaded = (state: State): boolean => state[Namespace.Data].isLoaded;
export const getError = (state: State): string|null => state[Namespace.Data].error;
export const getFavoriteFilms = (state: State): Film[] => state[Namespace.Data].favoriteFilms;
