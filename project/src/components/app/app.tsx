import React, { FC } from 'react';
import MainPage from '../../pages/main/main-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import AddReviewPage from '../../pages/add-review/add-review-page';
import { ROUTES } from '../../constants/routes';
import MyListPage from '../../pages/my-list/my-list-page';
import { Route, Routes } from 'react-router-dom';
import PlayerPage from '../../pages/player/player-page';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import FilmPage from '../../pages/film/film-page';
import { useAppSelector } from '../../hooks/hooks';
import Loader from '../loader/loader';
import browserHistory from '../browser-history';
import HistoryRouter from '../history-router/history-router';

const App : FC = () => {
  const {films, isLoaded, authorizationStatus} = useAppSelector((selector) => selector);
  if (!isLoaded) {
    return <Loader/>;
  }
  const film = films[0];
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage film={film} />}/>
        <Route path={ROUTES.SIGNIN} element={<SignInPage/>}/>
        <Route
          path={ROUTES.MYLIST}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListPage films={films}/>
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.FILM} element={<FilmPage />}/>
        <Route
          path={ROUTES.ADDREVIEW}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route path={ROUTES.PLAYER} element={<PlayerPage/>}/>
        <Route path={ROUTES.NOTFOUND} element={<NotFoundPage/>}/>
      </Routes>
    </HistoryRouter>
  );
};

export default App;
