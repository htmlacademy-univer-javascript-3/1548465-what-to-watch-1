import { store } from '../store';
import { Film } from './film/film.type';
import { Review } from './review/review.type';
import { AuthorizationStatus } from './authorization/authorization-status.enum';
import { User } from './user/user';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type FilmState = {
  film: Film | null;
  reviews: Review[];
  similarFilms: Film[];
}

export type MainState = {
  films: Film[];
  promoFilm: Film | null;
  activeGenre: string;
  isLoaded: boolean;
  error: string | null;
}

export type UserState = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
}
