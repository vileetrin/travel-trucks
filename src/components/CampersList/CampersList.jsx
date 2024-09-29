import css from './CampersList.module.css';
import Camper from '../Camper/Camper';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectPaginatedCampers,
  selectCurrentPage,
  selectTotalPages,
} from '../../redux/campers/selectors';
import { setCurrentPage, campersPagination } from '../../redux/campers/slise';

export default function CampersList() {
  const dispatch = useDispatch();
  const campers = useSelector(selectPaginatedCampers);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  const handleLoadMore = () => {
    dispatch(campersPagination());
  };

  const isLastPage = currentPage >= totalPages || campers.length === 0;

  return (
    <div className={css.container}>
      {campers.length === 0 ? (
        <p>No campers found</p>
      ) : (
        <>
          <ul className={css.list}>
            {campers.map(camper => (
              <li key={camper.id}>
                <Camper camper={camper} />
              </li>
            ))}
          </ul>
          {!isLastPage && (
            <button onClick={handleLoadMore} className={css.btn}>
              Load more
            </button>
          )}
        </>
      )}
    </div>
  );
}
