export type Review = {
  id: number;
  filmId: number;
  text: string;
  publicationDate: string;
  rating: number;
  user: {
    id: number;
    name: string;
  };
}
