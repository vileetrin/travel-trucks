import css from './CampersList.module.css';
import Camper from '../Camper/Camper';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPaginatedCampers,
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/campers/selectors';
import { setCurrentPage } from '../../redux/campers/slise';

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectPaginatedCampers);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {campers.map(camper => (
          <li key={camper.id}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
      {currentPage < totalPages && (
        <button onClick={handleLoadMore} className={css.btn}>
          Load more
        </button>
      )}
    </div>
  );
}
