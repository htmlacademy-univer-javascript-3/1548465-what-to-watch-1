export type Review = {
  id: number;
  filmId: number;
  comment: string;
  date: string;
  rating: number;
  user: {
    id: number;
    name: string;
  };
}
