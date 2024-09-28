import css from './CatalogPage.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import CampersList from '../../components/CampersList/CampersList';
import Loader from '../../components/Loader/Loader';
import SideBar from '../../components/SideBar/SideBar';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

import { fetchCampers } from '../../redux/campers/operations';
import { selectLoading, selectError } from '../../redux/campers/selectors';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div className={css.container}>
      <SideBar />
      {isLoading ? <Loader /> : isError ? <ErrorMessage /> : <CampersList />}
    </div>
  );
}
