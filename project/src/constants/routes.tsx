export const ROUTES = {
  MAIN: '/',
  SIGNIN: '/login',
  MYLIST: '/mylist',
  FILM: '/films/:id',
  FILMPREFIX: '/films',
  ADDREVIEW: '/films/:id/film-review',
  PLAYER: '/player/:id',
  NOTFOUND: '*'
};

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout'
}
