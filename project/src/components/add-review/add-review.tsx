import React, { ChangeEvent, FC, FormEvent, Fragment, useState } from 'react';
import { Review } from '../../types/review/review.type';
import { ReviewData } from '../../types/review/review-data';
import NotFoundPage from '../../pages/not-found/not-found-page';
import { getError } from '../../store/reducer/main/main-selector';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getFilm } from '../../store/reducer/film/film-selector';
import { getUser } from '../../store/reducer/user/user-selector';
import { useNavigate } from 'react-router-dom';
import { postReview } from '../../store/api-action';
import { setError } from '../../store/action';
import { now } from 'moment';

const AddReview: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const film = useAppSelector(getFilm);
  const user = useAppSelector(getUser);
  const [formValue, setFormValue] = useState<ReviewData>({
    rating: 0,
    comment: ''
  });
  const error = useAppSelector(getError);

  if (!film) {
    return <NotFoundPage/>;
  }

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prevValue) => ({
      ...prevValue,
      comment: event.target.value
    }));
  };
  const handleStarsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      rating: Number(event.target.value)
    }));
  };

  const onSubmit = (review: ReviewData) => {
    try {
      const newReview: Review = {
        id: film.id ?? 0,
        filmId: film.id ?? 0,
        comment: review.comment,
        rating: review.rating,
        date: now().toString(),
        user: { id: user?.id ?? 0, name: user?.name ?? '' },
      };
      dispatch(postReview(newReview));
      dispatch(setError(null));
    } catch {
      dispatch(setError('Can\'t post a form'));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formValue.comment && formValue.rating) {
      onSubmit(formValue);
      navigate(`/films/${film?.id}`);
    }

  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((star) => (
              <Fragment key={star}>
                <input
                  className="rating__input"
                  id={`star-${star + 1}`}
                  type="radio"
                  name="rating"
                  value={star + 1}
                  checked={formValue.rating === star + 1}
                  onChange={handleStarsCountChange}
                />
                <label className="rating__label" htmlFor={`star-${star + 1}`}>Rating {star + 1}</label>
              </Fragment>
            ))
          }
        </div>
      </div>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={formValue.comment}
          onChange={handleReviewTextChange}
          maxLength={400}
          minLength={50}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={formValue.comment.length < 50 || formValue.comment.length >= 400 || formValue.rating === 0}
          >
            Post
          </button>
        </div>
        {error ? <p>{error}</p> : null}
      </div>
    </form>
  );
};

export default AddReview;
