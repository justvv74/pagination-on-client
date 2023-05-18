import { Link } from 'react-router-dom';
import { IItem } from '../../../store/PostListStore';

export function BlogCard({
  title,
  createdAt,
  description,
  image,
  preview,
  id,
}: IItem) {
  return (
    <article>
      <header className='entry-header'>
        <h1 className='entry-title'>
          <Link to={`/posts/${id}`}>{title}</Link>
        </h1>
        <div className='entry-meta'>
          <span className='posted-on'>
            <time className='entry-date published'>
              {createdAt ? createdAt.substring(0, 10) : ''}
            </time>
          </span>
        </div>
        <div className='entry-thumbnail'>
          <img src={image} alt={preview} />
        </div>
      </header>
      <div className='entry-summary'>
        <p>
          {description ? `${description.substring(0, 200)}... ` : ''}

          <Link to={`/posts/${id}`} className='more-link'>
            Read more
          </Link>
        </p>
      </div>
    </article>
  );
}
