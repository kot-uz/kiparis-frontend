import {Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import NavigationComponent from './components/NavigationComponent';

function App() {
  return (
    <>
      <NavigationComponent/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/favourites' element={<FavouritesPage/>} />
      </Routes>
    </>
  );
}

export default App;
