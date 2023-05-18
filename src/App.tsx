import { BrowserRouter } from 'react-router-dom';
import { Blog } from './components/Blog';

export function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Blog />
      </div>
    </BrowserRouter>
  );
}
