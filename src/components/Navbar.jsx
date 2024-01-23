import { NavLink } from 'react-router-dom';
import menu from '../assets/icons/menu.png';

const Navbar = () => {
  return (
    <header className='header'>
        <NavLink to='/' className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className='blue-gradient_text'>LM</p>
        </NavLink>
        <NavLink to='/menubar' className="w-10 h-10 items-center">
            <img src= {menu} />
        </NavLink>
        
    </header>
  )
}

export default Navbar