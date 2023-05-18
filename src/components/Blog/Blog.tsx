import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { BlogList } from './BlogList';
import { Post } from '../Post';
import { useEffect } from 'react';
import { PostListStore } from '../../store/PostListStore';
import { observer } from 'mobx-react-lite';

export const postList = new PostListStore();

export const Blog = observer(() => {
  useEffect(() => {
    postList.getList();
  }, []);

  return (
    <>
      <header id='masthead' className='site-header'>
        <div className='site-branding'>
          <h1 className='site-title'>
            <Link to={'/'}>Qtim</Link>
          </h1>
          <h2 className='site-description'>
            Разрабатываем цифровые продукты любой сложности
          </h2>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/page/1' />} />
        <Route path='/page/:page' element={<BlogList />} />
        <Route path='/posts/:id' element={<Post />} />
      </Routes>
    </>
  );
});
