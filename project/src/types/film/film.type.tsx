export type Film = {
  id: number;
  title: string;
  description: string;
  genre: string;
  releaseYear: number;
  rating: number;
  previewImage: string;
  previewVideo: string;
  video: string;
  actors: string[];
  director: string;
  durationInMinutes: number;
  reviewsCount: number;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  isFavorite: boolean;
  isPromo?: boolean;
}
