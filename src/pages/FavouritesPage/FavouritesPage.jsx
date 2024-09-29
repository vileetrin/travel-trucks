import React from 'react';
import { useSelector } from 'react-redux';
import css from './FavouritesPage.module.css';
import Equipment from '../../components/Equipment/Equipment';
import PhotoSwiper from '../../components/PhotoSwiper/PhotoSwiper';

const FavouritesPage = () => {
  const favourites = useSelector(state => state.favourites.items);

  return (
    <div className={css.container}>
      {favourites.length === 0 ? (
        <p className={css.emptyMessage}>You have no favourites</p>
      ) : (
        favourites.map(camper => (
          <div key={camper.id} className={css.favouriteItem}>
            <div className={css.imgContainer}>
              <PhotoSwiper gallery={camper.gallery} />
            </div>

            <div className={css.content}>
              <div className={css.header}>
                <h2 className={css.title}>{camper.name}</h2>
                <div className={css.priceContainer}>
                  <p className={css.price}>
                    €
                    {camper.price.toLocaleString('en', {
                      useGrouping: false,
                      minimumFractionDigits: 2,
                    })}
                  </p>
                  <svg className={`${css.favourite} ${css.favouriteActive}`}>
                    <use href="icons.svg#icon-favourite"></use>
                  </svg>
                </div>
              </div>
              <div className={css.locAndRewContainer}>
                <div className={css.ratingContainer}>
                  <svg className={css.ratingImg}>
                    <use href="icons.svg#icon-rating"></use>
                  </svg>
                  <p className={css.rewievs}>
                    {camper.rating} (
                    {camper.reviews.length > 0 && (
                      <span>{camper.reviews.length} Reviews</span>
                    )}
                    )
                  </p>
                </div>
                <div className={css.locationContainer}>
                  <svg className={css.locationImg}>
                    <use href="icons.svg#icon-location"></use>
                  </svg>
                  <p className={css.location}>{camper.location}</p>
                </div>
              </div>
              <p className={css.text}>{camper.description}</p>
              <Equipment equipment={camper} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FavouritesPage;
