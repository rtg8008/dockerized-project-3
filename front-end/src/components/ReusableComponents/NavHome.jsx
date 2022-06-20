import { useNavigate } from 'react-router-dom';
import { Logo } from './StyleNavHome.js';

const NavHome = () => {
  const nav = useNavigate();

  return(
    <>
     <Logo src='/images/homelogo.png' alt='Home Logo' title='Return Home' data-testid='nav-to-home-page' onClick={() => {nav('/')}}/>
    </>
  )
}

export default NavHome;



// import {useNavigate } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import HomeIcon from '@mui/icons-material/Home';
// import styled from 'styled-components';


// const NavHome = () => {
//   const nav = useNavigate();
//   return(
//     <StyledDiv>
//       <StyledTitle>Worldwide Equipment Guide</StyledTitle>
//       <Button onClick={() => {
//         nav('/');
//         }} variant="link" size="large" startIcon={<HomeIcon />}>Home</Button>    
//     </StyledDiv>
//   )
// }

// export default NavHome;

// const StyledDiv = styled.div`
//   background-color: #182030;
//   color: white;
//   margin-top: 0;
//   text-align: center;
// `
// const StyledTitle = styled.h1`
//   margin: 0;
//   padding-top: 16px;
// `