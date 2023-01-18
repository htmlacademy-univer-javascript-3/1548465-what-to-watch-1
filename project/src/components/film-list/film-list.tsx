import { FC, useState } from 'react';
import { Film } from '../../types/film/film.type';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
}

const FilmList: FC<FilmListProps> = (props) => {
  const { films } = props;
  const [, setActiveFilmCard] = useState<number | null>(null);
  return (
    <div className='catalog__films-list'>
      {
        films.map((film) => (
          <FilmCard
            film={{
              id: film.id,
              title: film.title,
              imagePath: film.posterImage,
              previewPath: film.previewVideo
            }}
            key={film.id}
            onHover={setActiveFilmCard}
          />)
        )
      }
    </div>
  );
};

export default FilmList;
