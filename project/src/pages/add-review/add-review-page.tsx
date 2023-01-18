import UserBlock from '../../components/user-block/user-block';
import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/hooks';
import { Film } from '../../types/film.type';
import { api } from '../../store';
import { ROUTES } from '../../constants/routes';
import Logo from '../../components/logo/logo';
import { redirectToRoute } from '../../store/action';

const AddReviewPage: FC = () => {
  const params = useParams();
  const filmId = Number(params.filmId);
  const [film, setFilm] = useState<null | Film>(null);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    api.get<Film>(`/films/${id || -1}`).then(({ data }) => {
      if (data) {
        setFilm(data);
      } else {
        dispatch(redirectToRoute(ROUTES.NOTFOUND));
      }
    });
  }, [filmId]);
  return (
    <section className='film-card film-card--full'>
      <div className='film-card__header'>
        <div className='film-card__bg'>
          <img src={film?.backgroundImage} alt={film?.title}/>
        </div>
        <h1 className='visually-hidden'>WTW</h1>

        <header className='page-header'>
          <Logo/>

          <nav className='breadcrumbs'>
            <ul className='breadcrumbs__list'>
              <li className='breadcrumbs__item'>
                <a href={id ? `/films/${id}` : '#'} className='breadcrumbs__link'>{film?.title}</a>
              </li>
              <li className='breadcrumbs__item'>
                <a className='breadcrumbs__link'>Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock/>
        </header>

        <div className='film-card__poster film-card__poster--small'>
          <img src={film?.posterImage} alt={film?.title} width='218' height='327'/>
        </div>
      </div>
    </section>
  );
};

export default AddReviewPage;
