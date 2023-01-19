import {Review} from '../../../types/review/review.type';
import {FC} from 'react';
import { getFormattedReviewDate } from '../../../helpers/common-helper';

type FilmReviewProps = {
  review: Review;
}

const FilmReview: FC<FilmReviewProps> = (props) => {
  const { review } = props;
  const formattedDate = getFormattedReviewDate(new Date(review.date));

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">{formattedDate}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating.toFixed(1)}</div>
    </div>
  );
};
export default FilmReview;
