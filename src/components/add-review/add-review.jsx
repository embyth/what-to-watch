import React from "react";
import PropTypes from "prop-types";

import PageHeader from "../page-header/page-header";

import {CustomPropTypes} from "../../helpers/custom-prop-types";
import {Review} from "../../helpers/const";

const AddReview = ({currentMovie, onFormSubmit, onFormChange, onReviewChange, onRatingChange, isSubmitDisabled, isReviewSending, isSendingError}) => (
  <section className="movie-card movie-card--full">
    <div className="movie-card__header">
      <div className="movie-card__bg" style={{backgroundColor: currentMovie.backgroundColor}}>
        <img src={currentMovie.background} alt={currentMovie.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <PageHeader />

      <div className="movie-card__poster movie-card__poster--small">
        <img src={currentMovie.poster} alt={`${currentMovie.title} poster`} width="218" height="327" />
      </div>
    </div>

    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={onFormSubmit} onChange={onFormChange}>
        <div className="rating">
          <div className="rating__stars">
            {Review.RATINGS.map((rating) => (
              <React.Fragment key={rating}>
                <input className="rating__input" id={`star-${rating}`} type="radio" name="rating" value={rating} disabled={isReviewSending} onChange={onRatingChange} />
                <label className="rating__label" htmlFor={`star-${rating}`}>Rating {rating}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" disabled={isReviewSending} onChange={onReviewChange} required></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" disabled={isSubmitDisabled}>
              {isReviewSending ? Review.BUTTON_LABEL.SENDING : Review.BUTTON_LABEL.POST}
            </button>
          </div>
        </div>
      </form>
      {isSendingError &&
        <p style={{color: `red`}}>Error while sending data. Please, try again later.</p>
      }
    </div>

  </section>
);

AddReview.propTypes = {
  currentMovie: CustomPropTypes.MOVIE,
  onFormSubmit: PropTypes.func.isRequired,
  onFormChange: PropTypes.func.isRequired,
  onReviewChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  isSubmitDisabled: PropTypes.bool.isRequired,
  isReviewSending: PropTypes.bool.isRequired,
  isSendingError: PropTypes.bool.isRequired,
};

export default AddReview;
