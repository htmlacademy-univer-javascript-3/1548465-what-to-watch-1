import { FC, useEffect } from 'react';

import {useAppDispatch, useAppSelector} from '../../hooks/hooks';
import {AuthorizationStatus } from '../../types/authorization/authorization-status.enum';
import {getFavoriteFilmsAction} from '../../store/api-action';
import {getAuthorizationStatus} from '../../store/reducer/user/user-selector';
import {getFavoriteFilms} from '../../store/reducer/main/main-selector';

import FilmList from '../../components/film/film-list/film-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


const MyListPage: FC = () => {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(getFavoriteFilmsAction());
    }
  }, [authorizationStatus, dispatch]);
  return (
    <div className='user-page'>
      <Header />
      <section className='catalog'>
        <h2 className='catalog__title visually-hidden'>Catalog</h2>
        <FilmList films={favoriteFilms}/>
      </section>
      <Footer />
    </div>
  );
};
export default MyListPage;
