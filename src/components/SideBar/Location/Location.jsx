import css from './Location.module.css';

export default function Location() {
  return (
    <div className={css.container}>
      <label htmlFor="location" className={css.label} />
      Location
      <div className={css.content}>
        <svg className={css.locationImg}>
          <use href="../../../../public/icons.svg#icon-location"></use>
        </svg>
        <input
          name="location"
          type="text"
          placeholder="City"
          className={css.input}
        />
      </div>
    </div>
  );
}
