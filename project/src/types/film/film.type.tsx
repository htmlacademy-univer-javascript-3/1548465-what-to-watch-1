export type Film = {
  id: number;
  name: string;
  description: string;
  genre: string;
  released: number;
  rating: number;
  previewVideoLink: string;
  videoLink: string;
  starring: string[];
  director: string;
  runTime: number;
  scoresCount: number;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  isFavorite: boolean;
  isPromo?: boolean;
}
