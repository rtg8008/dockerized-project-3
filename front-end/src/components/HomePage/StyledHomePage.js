import styled from 'styled-components';

export const Logo = styled.img`
  position: fixed;
  top: 16px;
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
    background-color: white;
    transform: scale(1.1);
  }
`


export const Mission = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 16px;
  margin: 10px;
  z-index: 3000;
  cursor: pointer;
  background-color: CadetBlue;
  color: #FFFEFE;
  transition: all 0.4s;
  
  &:hover {
    box-shadow: 0 0 28px 0 #889baf;
    color: CadetBlue;
    background-color: #FFFEFE;
    transform: scale(1.1);
  }
`

export const Input = styled.input`
  text-align: center;
  margin-left: 17em;
  width: 25em;
  border-radius: 20px;
  border: 0px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 16px;
  z-index: 3000;
  cursor: pointer;
  background-color: #FFFEFE;
  transition: all 0.4s;
`

export const Background = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 16px;
  margin: 10px;
  z-index: 3000;
  cursor: pointer;
  background-color: AliceBlue;
  color: salmon;
  transition: all 0.4s;
`
export const Delete = styled.img`
  position: fixed;
  bottom: 16px;
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
    background-color: Crimson;
    transform: scale(1.1);
  }
`
export const StyledBackground = styled.div`
  background-image: url("/mdo.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  width: 100vw;
  height: 97.3vh;
`;

export const StyledHeader = styled.h1`

`