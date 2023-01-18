import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film.type';
import { AuthorizationStatus } from '../types/authorization-status.enum';
import { User } from '../types/user';

export const changeGenre = createAction<string>('changeGenre');
export const fillFilms = createAction<Film[]>('setFilms');
export const setFilmsLoadedStatus = createAction<boolean>('setFilmsLoadedStatus');
export const changeAuthorizationStatus = createAction<AuthorizationStatus>('changeAuthorizationStatus');
export const setUser = createAction<User>('setUser');
