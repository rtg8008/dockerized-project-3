import { useNavigate } from 'react-router-dom';
import { Logo } from './StyleNavHome.js';

const NavHome = () => {
  const nav = useNavigate();

  return(
    <>
     <Logo src='/images/homelogo.png' alt='Home Logo' data-testid='nav-to-home-page' onClick={() => {nav('/')}}/>
    </>
  )
}

export default NavHome;