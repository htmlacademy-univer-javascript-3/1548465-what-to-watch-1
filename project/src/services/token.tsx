const AUTH_TOKEN = 'auth-token';

export type Token = string;

export const getToken = (): Token => localStorage.getItem(AUTH_TOKEN) ?? '';

export const saveToken = (token: Token): void => localStorage.setItem(AUTH_TOKEN, token);

export const dropToken = (): void => localStorage.removeItem(AUTH_TOKEN);
