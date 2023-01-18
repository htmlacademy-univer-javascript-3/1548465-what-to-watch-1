export enum ROUTES {
  MAIN = '/',
  SIGNIN = '/login',
  MYLIST = '/mylist',
  FILM = '/films/:id',
  FILMPREFIX = '/films',
  ADDREVIEW = '/films/:id/review',
  PLAYER = '/player/:id',
  NOTFOUND = '/404-not-found',
  DEFAULT = '*'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Similar = '/similar',
  Promo = '/promo',
  Favorite = '/favorite',
}

export enum Namespace {
  Data = 'DATA',
  Film = 'FILM',
  User = 'USER'
}
