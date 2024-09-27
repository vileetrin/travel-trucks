import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CampersList from '../../components/CampersList/CampersList';
import Location from '../../components/SideBar/Location/Location';
import { fetchCampers } from '../../redux/campers/operations';
import { selectLoading, selectError } from '../../redux/campers/selectors';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div>
      {isLoading && <Loader />}
      <Location />
      <CampersList />
      {isError && <ErrorMessage />}
    </div>
  );
}
