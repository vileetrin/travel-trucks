import css from './Location.module.css';
import { useState } from 'react';

export default function Location({ setLocationValue }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue(value);
    setLocationValue(value);
  };

  return (
    <div className={css.container}>
      <label htmlFor="location" />
      <span className={css.label}>Location</span>

      <div className={css.content}>
        <svg className={`${css.locationImg} ${inputValue ? css.active : ''}`}>
          <use href="icons.svg#icon-location"></use>
        </svg>
        <input
          id="location"
          type="text"
          placeholder="City"
          className={css.input}
          value={inputValue}
          onChange={handleInputChange}
          onFocus={e => e.target.classList.add(css.focused)}
          onBlur={e => e.target.classList.remove(css.focused)}
        />
      </div>
    </div>
  );
}
