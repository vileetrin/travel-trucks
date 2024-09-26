import PhotoSwiper from '../PhotoSwiper/PhotoSwiper';

export default function Camper({
  camper: { description, gallery, location, name, price, rating, reviews },
}) {
  return (
    <div>
      <PhotoSwiper gallery={gallery} />
      <h2>{name}</h2>
      <div>
        <p>€{price}</p>
        <svg>
          <use href="../../../public/icons.svg#icon-favourite"></use>
        </svg>
      </div>
      <div>
        <div>
          <svg>
            <use href="../../../public/icons.svg#icon-rating"></use>
          </svg>
          <p>
            {rating} (
            {reviews.length > 0 && <span>({reviews.length} Reviews)</span>})
          </p>
        </div>
        <div>
          <svg>
            <use href="../../../public/icons.svg#icon-location"></use>
          </svg>
          <p>{location}</p>
        </div>
      </div>
      <p>{description}</p>
      <button>Show more</button>
    </div>
  );
}
