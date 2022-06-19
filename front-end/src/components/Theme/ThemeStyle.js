import styled from 'styled-components';

export const ModeLogo = styled.button`
position: fixed;
bottom: 32px;
left: 16px;
text-align: center;
width: 150px;
height: auto;
border-radius: 20px;
border: 0px;
box-shadow: 0 0 8px 0 #889baf;
padding: 16px;
z-index: 3000;
cursor: pointer;
background-color: AliceBlue;
color: CadetBlue;
transition: all 0.4s;

&:hover {
  box-shadow: 0 0 28px 0 #889baf;
  background-color: Gray;
  color: Cornsilk;
}
`