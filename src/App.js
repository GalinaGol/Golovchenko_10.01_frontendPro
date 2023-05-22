import { Route, Routes } from 'react-router-dom';
import User from './components/User/User';
import Album from './components/Albums/Album';
import Photo from './components/Photo/Photo';

import './App.css';


function App() {
  return (
    <div className='Wrapper'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path='/users/:userId/albums' element={<Album />} />
          <Route path='/albums/:albumId/photos' element={<Photo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;