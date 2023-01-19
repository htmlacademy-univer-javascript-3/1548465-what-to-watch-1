import { createSlice } from '@reduxjs/toolkit';
import { fetchFilmsAction, fetchPromoFilm, getFavoriteFilmsAction } from '../../api-action';
import { changeGenre } from '../../action';
import { Namespace } from '../../../constants/webRoutes';
import { MainState } from '../../../types/state.type';
import { ALL_GENRES } from '../../../constants/constants';

const initialState: MainState = {
  films: [],
  activeGenre: ALL_GENRES,
  promoFilm: null,
  error: null,
  isLoaded: false,
  favoriteFilms: []
};

export const mainReducer = createSlice({
  name: Namespace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchPromoFilm.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
      })
      .addCase(changeGenre, (state, action) => {
        state.activeGenre = action.payload;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoaded = true;
      })
      .addCase(getFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      });
  }
});
