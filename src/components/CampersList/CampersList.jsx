import css from './CampersList.module.css';
import Camper from '../Camper/Camper';
import { useSelector } from 'react-redux';
// import { selectFilteredCampers } from '../../redux/campers/slise';
import { selectCampersList } from '../../redux/campers/selectors';

export default function CampersList() {
  //   const filteredCampers = useSelector(selectFilteredCampers);
  const campers = useSelector(selectCampersList);
  //   console.log(campers);

  return (
    <>
      <ul>
        {campers.map(camper => {
          return (
            <li key={camper.id}>
              <Camper camper={camper} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
