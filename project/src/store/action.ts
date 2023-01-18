import { createAction } from '@reduxjs/toolkit';
import { Film } from '../types/film.type';

export const changeGenre = createAction<{genre: string}>('changeGenre');
export const fillFilms = createAction<{films: Film[]}>('setFilms');
export const setFilmsLoadedStatus = createAction<boolean>('setFilmsLoadedStatus');
