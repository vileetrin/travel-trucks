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
      </nav>
    </div>
  );
}
