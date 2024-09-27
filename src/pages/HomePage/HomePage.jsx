import css from './HomePage.module.css';

import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/campers');
  };
  return (
    <div className={css.container}>
      <h1 className={css.header}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <button onClick={handleClick} className={css.button}>
        View Now
      </button>
    </div>
  );
}
