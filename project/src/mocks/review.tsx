import {Review} from '../types/review.type';

export const reviews: Review[] = [
  {
    id: 1,
    filmId: 1,
    text: 'Good movie',
    publicationDate: '15/01/2023 10:00',
    rating: 10,
    user: {
      id: 1,
      name: 'Igor'
    }
  },
  {
    id: 1,
    filmId: 1,
    text: 'I like this movie!',
    publicationDate: '15/01/2023 10:00',
    rating: 10,
    user: {
      id: 2,
      name: 'Vasya'
    }
  },
  {
    id: 2,
    filmId: 2,
    text: 'Bad movie',
    publicationDate: '15/01/2023 10:00',
    rating: 2,
    user: {
      id: 1,
      name: 'Igor'
    }
  },
  {
    id: 3,
    filmId: 3,
    text: ':(',
    publicationDate: '15/01/2023 10:00',
    rating: 4,
    user: {
      id: 3,
      name: 'Kesha'
    }
  },
  {
    id: 4,
    filmId: 4,
    text: 'Very boring',
    publicationDate: '15/01/2023 10:00',
    rating: 5,
    user: {
      id: 1,
      name: 'Igor'
    }
  },
  {
    id: 5,
    filmId: 5,
    text: 'Good actors, but very simple plot',
    publicationDate: '15/01/2023 10:00',
    rating: 7,
    user: {
      id: 1,
      name: 'Igor'
    }
  },
  {
    id: 6,
    filmId: 6,
    text: 'This is worst movie i ever seen (((',
    publicationDate: '15/01/2023 10:00',
    rating: 1,
    user: {
      id: 1,
      name: 'Igor'
    }
  },
  {
    id: 7,
    filmId: 7,
    text: '',
    publicationDate: '15/01/2023 10:00',
    rating: 6,
    user: {
      id: 1,
      name: 'Igor'
    }
  },
  {
    id: 8,
    filmId: 8,
    text: 'My son don\'t like this movie',
    publicationDate: '15/01/2023 10:00',
    rating: 3.5,
    user: {
      id: 1,
      name: 'Igor'
    }
  },
];

export function getReviewsByFilmId(filmId: number): Review[] {
  return reviews.filter((review?) => review.filmId === filmId);
}
