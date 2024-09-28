import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCamperById } from '../../redux/campers/operations';
import CamperDetails from '../../components/CamperDetails/CamperDetails';

export default function CamperDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector(state => state.campers.item);

  //   console.log(camper);
  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  return (
    <div>
      <CamperDetails camper={camper} />
    </div>
  );
}
