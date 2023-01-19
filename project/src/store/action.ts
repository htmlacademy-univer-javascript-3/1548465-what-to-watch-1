import { createAction } from '@reduxjs/toolkit';
import { WebRoutes } from '../constants/routes';

export const changeGenre = createAction<string>('changeGenre');
export const redirectToRoute = createAction<WebRoutes | string>('redirectToRoute');
export const setError = createAction<string | null>('setError');
