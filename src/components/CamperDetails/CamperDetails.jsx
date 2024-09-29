import css from './CamperDetails.module.css';

export default function CamperDetails({ camper }) {
  const { name, location, reviews, rating, price, gallery, description } =
    camper;

  return (
    <div className={css.container}>
      <div className={css.infoContainer}>
        <h2 className={css.title}>{name}</h2>
        <div className={css.locAndRewContainer}>
          <div className={css.ratingContainer}>
            <svg className={css.ratintImg}>
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
        <h2 className={css.price}>€{price}</h2>
      </div>
      <div className={css.galleryContainer}>
        {gallery.map((img, index) => (
          <img
            key={index}
            src={img.thumb}
            alt={`Camper image ${index + 1}`}
            className={css.galleryImage}
          />
        ))}
      </div>
      <p className={css.text}>{description}</p>
    </div>
  );
}
