import PhotoSwiper from '../PhotoSwiper/PhotoSwiper';
import Aquipment from '../Aquipment/Aquipment';
import css from './Camper.module.css';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

export default function Camper({ camper }) {
  const { id, description, gallery, location, name, price, rating, reviews } =
    camper;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/campers/${id}`);
  };

  const [isFavourite, setIsFavourite] = useState(false);
  const [isRated, setIsRated] = useState(false);

  const handleFavouriteClick = () => {
    setIsFavourite(prevState => !prevState);
  };

  const handleRatingClick = () => {
    setIsRated(prevState => !prevState);
  };

  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <PhotoSwiper gallery={gallery} />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.priceContainer}>
            <p className={css.price}>€{price}</p>
            <svg
              className={`${css.favourite} ${
                isFavourite ? css.favouriteActive : ''
              }`}
              onClick={handleFavouriteClick}
            >
              <use href="/public/icons.svg#icon-favourite"></use>
            </svg>
          </div>
        </div>
        <div className={css.locAndRewContainer}>
          <div className={css.ratingContainer}>
            <svg
              className={`${css.ratingImg} ${isRated ? css.ratingActive : ''}`}
              onClick={handleRatingClick}
            >
              <use href="/public/icons.svg#icon-rating"></use>
            </svg>
            <p className={css.rewievs}>
              {rating} (
              {reviews.length > 0 && <span>{reviews.length} Reviews</span>})
            </p>
          </div>
          <div className={css.locationContainer}>
            <svg className={css.locationImg}>
              <use href="/public/icons.svg#icon-location"></use>
            </svg>
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <p className={css.text}>{description}</p>
        <Aquipment aquipment={camper} />
        <button className={css.button} onClick={handleClick}>
          Show more
        </button>
      </div>
    </div>
  );
}
