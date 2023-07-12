import {Link} from 'react-router-dom';

const NavigationComponent = () => {
  return <nav className='flex justify-between items-center p-3 bg-slate-500 h-[50px] text-white'>
    <h2>Kiparis</h2>
    <div>
      <Link className='mr-3' to="/">Home</Link>
      <Link to="/favourites">Favourites</Link>
    </div>
  </nav>
}

export default NavigationComponent;