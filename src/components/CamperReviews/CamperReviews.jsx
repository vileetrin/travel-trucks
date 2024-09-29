import css from './CamperReviews.module.css';
import { useSelector } from 'react-redux';
import { selectCamperDetails } from '../../redux/campers/selectors';
import BookingForm from '../BookingForm/BookingForm';

export default function CamperReviews() {
  const camper = useSelector(selectCamperDetails);

  const getInitial = name => {
    if (!name || name.length === 0) return '';
    return name.charAt(0).toUpperCase();
  };

  const reviews = camper.reviews || [];

  return (
    <div className={css.box}>
      <div className={css.container}>
        {reviews.map((review, index) => {
          const reviewerName = review.reviewer_name ?? '';
          const reviewerInitial = getInitial(reviewerName);
          const reviewerRating = review.reviewer_rating ?? 0;

          return (
            <div className={css.commentBox}>
              <div key={index} className={css.infoContainer}>
                <div className={css.avatar}>
                  <p className={css.avatarSymbol}>{reviewerInitial}</p>{' '}
                </div>
                <div>
                  <p className={css.name}>{reviewerName}</p>
                  <div>
                    {Array.from({ length: reviewerRating }, (_, idx) => (
                      <svg key={idx} className={css.img}>
                        <use href="icons.svg#icon-rating"></use>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className={css.text}>{review.comment}</p>
            </div>
          );
        })}
      </div>
      <BookingForm />
    </div>
  );
}
