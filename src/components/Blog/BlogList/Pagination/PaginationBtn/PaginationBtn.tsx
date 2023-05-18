import styles from './paginationbtn.module.scss';
import { Link } from 'react-router-dom';

interface IPaginationBtn {
  item: number;
  page: number;
}

export function PaginationBtn({ item, page }: IPaginationBtn) {
  const hideBtnNext = item + 1 > page + 2 ? styles.hideBtn : '';
  const hideBtnBack = item + 1 < page - 2 ? styles.hideBtn : '';

  return (
    <Link
      to={`/page/${item + 1}`}
      className={`page-numbers ${
        page === item + 1 ? 'current' : ''
      } ${hideBtnNext} ${hideBtnBack}`}
    >
      {item + 1}
    </Link>
  );
}
