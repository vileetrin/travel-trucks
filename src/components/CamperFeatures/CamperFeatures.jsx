import css from './CamperFeatures.module.css';
import { useSelector } from 'react-redux';
import { selectCamperDetails } from '../../redux/campers/selectors';
import Equipment from '../Equipment/Equipment';
import BookingForm from '../BookingForm/BookingForm';

export default function CamperFeatures() {
  const camper = useSelector(selectCamperDetails);

  return (
    <div className={css.box}>
      <div className={css.container}>
        <Equipment equipment={camper} />
        <div className={css.detailsContainer}>
          <h3 className={css.title}>Vehicle details</h3>
          <hr className={css.line} />
          <ul className={css.list}>
            <li className={css.listitem}>
              <p className={css.text}>Form</p>
              <p className={css.text}>{camper.form}</p>
            </li>
            <li className={css.listitem}>
              <p className={css.text}>Length</p>
              <p className={css.text}>{camper.length}</p>
            </li>
            <li className={css.listitem}>
              <p className={css.text}>Width</p>
              <p className={css.text}>{camper.width}</p>
            </li>
            <li className={css.listitem}>
              <p className={css.text}>Height</p>
              <p className={css.text}>{camper.height}</p>
            </li>
            <li className={css.listitem}>
              <p className={css.text}>Tank</p>
              <p className={css.text}>{camper.tank}</p>
            </li>
            <li className={css.listitem}>
              <p className={css.text}>Consumption</p>
              <p className={css.text}>{camper.consumption}</p>
            </li>
          </ul>
        </div>
      </div>
      <BookingForm />
    </div>
  );
}
