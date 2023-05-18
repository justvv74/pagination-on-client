import { BlogCard } from '../BlogCard';
import { observer } from 'mobx-react-lite';
import { postList } from '../Blog';
import styles from './bloglost.module.scss';
import { Pagination } from './Pagination';
import { useParams } from 'react-router-dom';

export const BlogList = observer(() => {
  const { page } = useParams();
  const list = postList.list.slice(Number(page) * 10, Number(page) * 10 + 10);

  return (
    <div id='primary' className='content-area column two-thirds'>
      <main id='main' className='site-main' role='main'>
        <div className='grid bloggrid'>
          {list.map((item) => (
            <BlogCard
              key={item.id}
              title={item.title}
              createdAt={item.createdAt}
              description={item.description}
              image={item.image}
              preview={item.preview}
              id={item.id}
            />
          ))}
        </div>
        <div className='clearfix'></div>
        {postList.totalPages > 1 && <Pagination />}
      </main>
      {postList.state && <div className={styles.spinner}></div>}
      {postList.error && <p className={styles.error}>{postList.error}</p>}
    </div>
  );
});
