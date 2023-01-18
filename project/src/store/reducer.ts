import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, fillFilms } from './action';
import { mockFilms } from '../mocks/films';
import { ALL_GENRES } from '../constants/constants';

const initialState = {
  activeGenre: ALL_GENRES,
  films: mockFilms
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;

      state.activeGenre = genre;
    })
    .addCase(fillFilms, (state, action) => {
      const { films } = action.payload;
      state.films = films;
    });
});
