import PhotoSwiper from '../PhotoSwiper/PhotoSwiper';
import Equipment from '../Equipment/Equipment';
import css from './Camper.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourites, deleteFavourites } from '../../redux/favourites/slice';

export default function Camper({ camper }) {
  const { id, description, gallery, location, name, price, rating, reviews } =
    camper;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favourites.items);
  const isFavourite = favorites.find(fav => fav.id === id);

  const handleClick = () => {
    navigate(`/catalog/${id}`);
  };

  const [isRated, setIsRated] = useState(false);

  const handleFavouriteClick = () => {
    if (isFavourite) {
      dispatch(deleteFavourites(id));
    } else {
      dispatch(addFavourites(camper));
    }
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
            <p className={css.price}>
              €
              {price.toLocaleString('en', {
                useGrouping: false,
                minimumFractionDigits: 2,
              })}
            </p>
            <svg
              className={`${css.favourite} ${
                isFavourite ? css.favouriteActive : ''
              }`}
              onClick={() => handleFavouriteClick(id)}
            >
              <use href="icons.svg#icon-favourite"></use>
            </svg>
          </div>
        </div>
        <div className={css.locAndRewContainer}>
          <div className={css.ratingContainer}>
            <svg
              className={`${css.ratingImg} ${isRated ? css.ratingActive : ''}`}
              onClick={handleRatingClick}
            >
              <use href="icons.svg#icon-rating"></use>
            </svg>
            <p className={css.rewievs}>
              {rating} (
              {reviews.length > 0 && <span>{reviews.length} Reviews</span>})
            </p>
          </div>
          <div className={css.locationContainer}>
            <svg className={css.locationImg}>
              <use href="icons.svg#icon-location"></use>
            </svg>
            <p className={css.location}>{location}</p>
          </div>
        </div>
        <p className={css.text}>{description}</p>
        <Equipment equipment={camper} />
        <button className={css.button} onClick={handleClick}>
          Show more
        </button>
      </div>
    </div>
  );
}
