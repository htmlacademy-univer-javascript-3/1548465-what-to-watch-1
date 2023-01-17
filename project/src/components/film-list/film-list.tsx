import { FC } from 'react';
import { Film } from '../../types/film.type';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

const FilmList: FC<FilmListProps> = (props) => {
  const { films } = props;
  return (
    <div className='catalog__films-list'>
      {
        films.map((film) => (
            <FilmCard
              film={{
                id: film.id,
                title: film.title,
                imagePath: film.posterImage,
                previewVideoLink: film.previewVideo
              }}
              key={film.title}
            />
          )
        )
      }
    </div>
  );
};

export default FilmList;
