import styled from 'styled-components';


// Background --------------------------------------------------
export const Background = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 16px;
  margin: 10px;
  margin-bottom: 25px;
  z-index: 1000;
  background-color: AliceBlue;
  transition: all 0.4s;
  text-align: center;
`
// Create Mission ------------------------------------------------
export const Insert = styled.input`
  text-align: center;
  width: 15em;
  border-radius: 20px;
  border: 0px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 8px;
  margin-right: 16px;
  margin-left: 16px;
  z-index: 3000;
  cursor: pointer;
  background-color: Cornsilk;
  transition: all 0.4s;
`
export const Create = styled.button`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  border: 0;
  width: 28em;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0px;
  z-index: 3000;
  cursor: pointer;
  color: Cornsilk;
  background-color: CadetBlue;
  transition: all 0.4s;
  text-align: center;

  &:hover {
    color: CadetBlue;
    background-color: Cornsilk;
  }
`

// Search Mission ------------------------------------------------
export const Search = styled.input`
  text-align: center;
  width: 25em;
  border-radius: 20px;
  border: 0px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 16px;
  z-index: 3000;
  cursor: pointer;
  background-color: Cornsilk;
  transition: all 0.4s;
`

export const Mission = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0px;
  z-index: 3000;
  cursor: pointer;
  background-color: CadetBlue;
  color: Cornsilk;
  transition: all 0.4s;
  text-align: left;
  
  &:hover {
    box-shadow: 0 0 28px 0 #889baf;
    color: CadetBlue;
    background-color: Cornsilk;
    transform: scale(1.1);
  }
`

