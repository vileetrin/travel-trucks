import css from './VehicleEquipment.module.css';
import { useState } from 'react';

export default function VehicleEquipment({
  setACValue,
  setKitchenValue,
  setBathroomValue,
  setTVValue,
  setTransmissionValue,
}) {
  const [activeButtons, setActiveButtons] = useState({
    ac: false,
    kitchen: false,
    bathroom: false,
    tv: false,
    transmission: '',
  });

  const toggleButton = key => {
    setActiveButtons(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));

    if (key === 'ac') setACValue(!activeButtons.ac);
    if (key === 'kitchen') setKitchenValue(!activeButtons.kitchen);
    if (key === 'bathroom') setBathroomValue(!activeButtons.bathroom);
    if (key === 'tv') setTVValue(!activeButtons.tv);
    if (key === 'transmission') {
      setTransmissionValue('automatic');
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <hr className={css.line} />
      <ul className={css.list}>
        {['ac', 'transmission', 'kitchen', 'tv', 'bathroom'].map(item => (
          <li className={css.listItem} key={item}>
            <button
              className={css.btn}
              onClick={() => toggleButton(item)}
              style={{
                outline: activeButtons[item]
                  ? '2px solid #E44848'
                  : '1px solid #dadde1',
              }}
            >
              <svg className={css.listImg}>
                <use href={`icons.svg#icon-${item}`}></use>
              </svg>
              <p className={css.text}>
                {item === 'transmission'
                  ? 'Automatic'
                  : item.charAt(0).toUpperCase() + item.slice(1)}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
