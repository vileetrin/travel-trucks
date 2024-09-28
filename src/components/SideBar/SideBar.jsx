import css from './SideBar.module.css';
import Location from './Location/Location';
import VehicleEquipment from './VehicleEquipment/VehicleEquipment';
import VehicleType from './VehicleType/VehicleType';

export default function SideBar() {
  return (
    <div className={css.container}>
      <Location />
      <div className={css.filtersContainer}>
        <p className={css.filters}>Filters</p>
        <VehicleEquipment />
        <VehicleType />
      </div>
      <button className={css.btn}>Search</button>
    </div>
  );
}
