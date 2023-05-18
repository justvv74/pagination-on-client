import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostStore } from '../../store/PostStore';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import styles from './post.module.scss';

const postStore = new PostStore();

export const Post = observer(() => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    postStore.getPostData(Number(id));
  }, [id]);

  return (
    <div id='primary' className='content-area column two-thirds'>
      <main id='main' className='site-main' role='main'>
        <article>
          <header className='entry-header'>
            <h1 className='entry-title'>{postStore.post.title}</h1>
            <div className='entry-meta'>
              <span className='posted-on'>
                <time className='entry-date published'>
                  {postStore.post.createdAt?.substring(0, 10)}
                </time>
              </span>
            </div>
            <div className='entry-thumbnail'>
              <img src={postStore.post.image} alt={postStore.post.preview} />
            </div>
          </header>
          <div className='entry-content'>
            <p>{postStore.post.preview}</p>
            <p>{postStore.post.description}</p>
          </div>
        </article>

        <nav className='navigation post-navigation' role='navigation'>
          <h1 className='screen-reader-text'>Post navigation</h1>
          <div className='nav-links'>
            <div className='nav-previous'>
              <button className='nav-previous' onClick={() => navigate(-1)}>
                <span className='meta-nav'>←</span> Thanks for watching!
              </button>
            </div>
          </div>
        </nav>
      </main>
      {postStore.state && <div className={styles.spinner}></div>}
      {postStore.error && <p className={styles.error}>{postStore.error}</p>}
    </div>
  );
});
