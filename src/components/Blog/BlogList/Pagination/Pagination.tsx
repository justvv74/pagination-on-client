import { Link, useParams } from 'react-router-dom';
import { postList } from '../../Blog';
import { PaginationBtn } from './PaginationBtn';

export function Pagination() {
  const { page } = useParams();
  const pagesArr = Array.from(Array(postList.totalPages - 1).keys());

  return (
    <nav className='pagination'>
      {Number(page) > 1 && (
        <Link to={`/page/${Number(page) - 1}`} className='next page-numbers'>
          « Back
        </Link>
      )}
      {pagesArr.map((item) => (
        <PaginationBtn key={item} item={item} page={Number(page)} />
      ))}

      {Number(page) !== postList.totalPages - 1 && (
        <Link to={`/page/${Number(page) + 1}`} className='next page-numbers'>
          Next »
        </Link>
      )}
    </nav>
  );
}
