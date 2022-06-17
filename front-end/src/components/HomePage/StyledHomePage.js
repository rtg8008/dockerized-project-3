import styled from 'styled-components';

export const Logo = styled.img`
  position: fixed;
  top: 32px;
  right: 32px;
  width: 50px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 8px 16px;
  z-index: 3000;
  cursor: pointer;
  background-color: #ffffff;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 28px 0 #889baf;
    transform: scale(1.1);
  }
`


export const Mission = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 60px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 16px;
  z-index: 3000;
  cursor: pointer;
  background-color: #ffffff;
  transition: all 0.4s;
  
  &:hover {
    box-shadow: 0 0 28px 0 #889baf;
    transform: scale(1.1);
  }
`

export const ModeLogo = styled.button`
  position: fixed;
  top: 32px;
  right: 16px;
  width: 150px;
  height: auto;
  border-radius: 20px;
  border: 0px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 16px;
  z-index: 3000;
  cursor: pointer;
  background-color: #ffffff;
  transition: all 0.4s;
  
  &:hover {
    box-shadow: 0 0 28px 0 #889baf;
    transform: scale(1.1);
  }
`

;



