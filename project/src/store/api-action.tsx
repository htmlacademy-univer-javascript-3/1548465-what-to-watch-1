import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../types/film.type';
import {fillFilms, setFilmsLoadedStatus} from './action';
import {AppDispatch, State} from '../types/state.type';

type ApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchFilmsAction = createAsyncThunk<void, undefined, ApiConfig>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadedStatus(false));
    const resp = await api.get<Film[]>('films');
    dispatch(fillFilms({films: resp.data}));
    dispatch(setFilmsLoadedStatus(true));
  },
);
