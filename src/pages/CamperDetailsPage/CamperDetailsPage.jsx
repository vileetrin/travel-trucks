import { useParams, NavLink, Outlet } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/operations';
import {
  selectCamperDetails,
  selectLoading,
} from '../../redux/campers/selectors';
import CamperDetails from '../../components/CamperDetails/CamperDetails';
import Loader from '../../components/Loader/Loader';
import css from './CamperDetailsPage.module.css';

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(selectCamperDetails);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  if (isLoading || !camper) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      <CamperDetails camper={camper} />
      <ul className={css.list}>
        <li className={css.listItem}>
          <NavLink
            to="features"
            className={({ isActive }) =>
              isActive ? `${css.listItem} ${css.active}` : css.listItem
            }
          >
            Features
          </NavLink>
        </li>
        <li className={css.listItem}>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              isActive ? `${css.listItem} ${css.active}` : css.listItem
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <hr className={css.line} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
