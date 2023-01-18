import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillFilms, setFilmsLoadedStatus } from './action';
import { ALL_GENRES } from '../constants/constants';
import { Film } from '../types/film.type';

type AppState = {
  films: Film[];
  activeGenre: string;
  isLoaded: boolean;
};

const initialState: AppState = {
  films: [],
  activeGenre: ALL_GENRES,
  isLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload.genre;
    })
    .addCase(fillFilms, (state, action) => {
      state.films = action.payload.films;
    })
    .addCase(setFilmsLoadedStatus, (state, action) => {
      state.isLoaded = action.payload;
    });
});
