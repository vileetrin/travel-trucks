import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <RotatingLines
        height="60"
        width="60"
        color="#E44848"
        ariaLabel="audio-loading"
        wrapperStyle
        wrapperClass
        visible={true}
      />
    </div>
  );
}
