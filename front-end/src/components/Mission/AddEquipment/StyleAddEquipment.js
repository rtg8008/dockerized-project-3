import styled from 'styled-components';

export const Details = styled.div`
border-radius: 20px;
box-shadow: 0 0 8px 0 #889baf;
padding: 16px;
margin: 10px;
z-index: 3000;
cursor: pointer;
background-color: CadetBlue;
color: Cornsilk;
transition: all 0.4s;

// &:hover {
//   box-shadow: 0 0 28px 0 #889baf;
//   color: CadetBlue;
//   background-color: Cornsilk;
//   transform: scale(1.1);
// }
`

export const ReturnToMissionOverview = styled.img`
  position: fixed;
  top: 100px;
  right: 16px;
  width: 50px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 8px 16px;
  z-index: 3000;
  cursor: pointer;
  // background-color: rose;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 28px 0 #889baf;
    background-color: #FF7400;
    transform: scale(1.1);
  }
`