import React, { FC } from 'react';
import MainPage from '../../pages/main/main-page';
import NotFoundPage from '../../pages/not-found/not-found-page';
import AddReviewPage from '../../pages/add-review/add-review-page';
import { WebRoutes } from '../../constants/routes';
import MyListPage from '../../pages/my-list/my-list-page';
import { Route, Routes } from 'react-router-dom';
import SignInPage from '../../pages/sign-in-page/sign-in-page';
import PrivateRoute from '../private-route/private-route';
import FilmPage from '../../pages/film/film-page';
import { useAppSelector } from '../../hooks/hooks';
import Loader from '../loader/loader';
import { getIsLoaded } from '../../store/reducer/main/main-selector';
import { getAuthorizationStatus } from '../../store/reducer/user/user-selector';
import PlayerPage from '../../pages/player-page/player-page';

const App : FC = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoaded = useAppSelector(getIsLoaded);

  if (!isLoaded) {
    return <Loader/>;
  }

  return (
    <Routes>
      <Route path={WebRoutes.MAIN} element={<MainPage/>}/>
      <Route path={WebRoutes.SIGNIN} element={<SignInPage/>}/>
      <Route
        path={WebRoutes.MYLIST}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <MyListPage />
          </PrivateRoute>
        }
      />
      <Route path={WebRoutes.FILM} element={<FilmPage />}/>
      <Route
        path={WebRoutes.ADDREVIEW}
        element={
          <PrivateRoute authorizationStatus={authorizationStatus}>
            <AddReviewPage />
          </PrivateRoute>
        }
      />
      <Route path={WebRoutes.PLAYER} element={<PlayerPage/>}/>
      <Route path={WebRoutes.NOTFOUND} element={<NotFoundPage/>}/>
      <Route path={WebRoutes.DEFAULT} element={<NotFoundPage/>}/>
    </Routes>
  );
};

export default App;
