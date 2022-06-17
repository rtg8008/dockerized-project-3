import {useNavigate } from 'react-router-dom';

const NavHome = () => {
  const nav = useNavigate();
  const navigateHome = () => {
    nav('/')
  }
  return(
    <button onClick={navigateHome}>Home</button>
  )
}

export default NavHome;