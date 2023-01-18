import { createAction } from '@reduxjs/toolkit';
import { ROUTES } from '../constants/routes';

export const changeGenre = createAction<string>('changeGenre');
export const redirectToRoute = createAction<ROUTES | string>('redirectToRoute');
export const setError = createAction<string | null>('setError');
