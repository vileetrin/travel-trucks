import css from './VehicleType.module.css';
import { useState } from 'react';

const vehicleTypes = {
  van: 'panelTruck',
  'fully-integrated': 'fullyIntegrated',
  alcove: 'alcove',
};

export default function VehicleType({ setTypeValue }) {
  const [activeButton, setActiveButton] = useState('');

  const toggleButton = key => {
    const newValue = activeButton === key ? '' : vehicleTypes[key];
    setActiveButton(prevState => (prevState === key ? '' : key));
    setTypeValue(newValue);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <hr className={css.line} />
      <ul className={css.list}>
        {Object.keys(vehicleTypes).map(item => (
          <li className={css.listItem} key={item}>
            <button
              className={css.btn}
              onClick={() => toggleButton(item)}
              style={{
                outline:
                  activeButton === item
                    ? '2px solid #E44848'
                    : '1px solid #dadde1',
              }}
            >
              <svg className={css.listImg}>
                <use href={`icons.svg#icon-${item}`}></use>
              </svg>
              <p className={css.text}>
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
