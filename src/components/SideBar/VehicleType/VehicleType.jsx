import css from './VehicleType.module.css';
import { useState } from 'react';

export default function VehicleType() {
  const [activeButtons, setActiveButtons] = useState({});

  const toggleButton = key => {
    setActiveButtons(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <hr className={css.line} />
      <ul className={css.list}>
        {['van', 'fully-integrated', 'alcove'].map(item => (
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
                <use href={`/public/icons.svg#icon-${item}`}></use>
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
