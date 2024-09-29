import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={css.container}>
      <a href="/" className={css.logo}>
        Travel<span className={css.partlogo}>Trucks</span>
      </a>
      <nav className={css.navigation}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) =>
            isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink
          }
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) => {
            const linkClassName = isActive
              ? `${css.navLink} ${css.navLinkActive}`
              : css.navLink;
            return linkClassName;
          }}
        >
          {({ isActive }) => (
            <svg
              className={`${css.favourites} ${
                isActive ? css.favouritesActive : ''
              }`}
            >
              <use href="icons.svg#icon-favourite"></use>
            </svg>
          )}
        </NavLink>
      </nav>
    </div>
  );
}
