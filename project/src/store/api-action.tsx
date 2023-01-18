import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Film} from '../types/film.type';
import { changeAuthorizationStatus, fillFilms, setFilmsLoadedStatus, setUser } from './action';
import {AppDispatch, State} from '../types/state.type';
import { APIRoute } from '../constants/routes';
import { dropToken, saveToken } from '../services/token';
import { AuthorizationStatus } from '../types/authorization-status.enum';
import { User } from '../types/user';
import { AuthResponse } from '../types/auth-response';

type ApiConfig = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export const fetchFilmsAction = createAsyncThunk<void, undefined, ApiConfig>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsLoadedStatus(false));
    const resp = await api.get<Film[]>(APIRoute.Films);
    dispatch(fillFilms(resp.data));
    dispatch(setFilmsLoadedStatus(true));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, ApiConfig>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data: user } = await api.get<User>(APIRoute.Login);
      dispatch(setUser(user));
      dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  }
);


export const loginAction = createAsyncThunk<void, AuthResponse, ApiConfig>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const { data: user } = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(setUser(user));
    dispatch(changeAuthorizationStatus(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, ApiConfig>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dispatch(changeAuthorizationStatus(AuthorizationStatus.NoAuth));
    dropToken();
  }
);
