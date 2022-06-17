import {useNavigate } from 'react-router-dom';
import { Logo } from '../HomePage/StyledHomePage.js';

const NavHome = () => {
  const nav = useNavigate();
  // const navigateHome = () => {
  //   nav('/')
  // }
  return(
    <>
     <Logo  src='/logo512.png' alt='PintokartLogo' data-testid='nav-to-home-page' onClick={() => {nav('/')}}/>
    {/* <button onClick={navigateHome}>Home</button> */}
    </>
  )
}

export default NavHome;