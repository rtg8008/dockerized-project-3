import styled from 'styled-components';

export const Logo = styled.img`
  position: fixed;
  top: 16px;
  right: 16px;
  width: 50px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 8px 8px;
  z-index: 3000;
  cursor: pointer;
  background-color: Cornsilk;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 28px 0 #889baf;
    background-color: CadetBlue;
    transform: scale(1.1);
  }
`