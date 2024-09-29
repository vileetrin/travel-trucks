import css from './SideBar.module.css';
import Location from './Location/Location';
import VehicleEquipment from './VehicleEquipment/VehicleEquipment';
import VehicleType from './VehicleType/VehicleType';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  setLocation,
  setType,
  setAC,
  setKitchen,
  setBathroom,
  setTV,
  setTransmission,
} from '../../redux/filters/slice';
import { setFilteredCampers } from '../../redux/campers/slise';

export default function SideBar() {
  const dispatch = useDispatch();
  const [location, setLocationValue] = useState('');
  const [type, setTypeValue] = useState('');
  const [ac, setACValue] = useState(false);
  const [kitchen, setKitchenValue] = useState(false);
  const [bathroom, setBathroomValue] = useState(false);
  const [tv, setTVValue] = useState(false);
  const [transmission, setTransmissionValue] = useState('');

  const handleSearch = () => {
    const finalTransmission = transmission === '' ? '' : transmission;
    dispatch(setLocation(location));
    dispatch(setType(type));
    dispatch(setAC(ac));
    dispatch(setKitchen(kitchen));
    dispatch(setBathroom(bathroom));
    dispatch(setTV(tv));
    dispatch(setTransmission(finalTransmission));

    const filters = {
      location,
      type,
      ac,
      kitchen,
      bathroom,
      tv,
      transmission: finalTransmission,
    };
    dispatch(setFilteredCampers(filters));
  };

  return (
    <div className={css.container}>
      <Location setLocationValue={setLocationValue} />{' '}
      <div className={css.filtersContainer}>
        <p className={css.filters}>Filters</p>
        <VehicleEquipment
          setACValue={setACValue}
          setKitchenValue={setKitchenValue}
          setBathroomValue={setBathroomValue}
          setTVValue={setTVValue}
          setTransmissionValue={setTransmissionValue}
        />
        <VehicleType setTypeValue={setTypeValue} />
      </div>
      <button className={css.btn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
