import styled from 'styled-components';

// Background --------------------------------------------------
export const Background = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #222;
  padding: 16px;
  margin: 10px;
  margin-bottom: 25px;
  z-index: 1000;
  background-color: rgba(255,255,255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.4s;
  text-align: center;
`

// Equipment Details --------------------------------------------
export const Category = styled.div`
  display: inline-block;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #222;
  width: 40%;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0px;
  z-index: 3000;
  background-color: DarkSlateGray;
  color: Cornsilk;
  transition: all 0.4s;
  text-align: center;
  }
`

export const Details = styled.div`
  display: inline-block;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #222;
  width: 40%;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0px;
  z-index: 3000;
  background-color: CadetBlue;
  color: Cornsilk;
  transition: all 0.4s;
  text-align: center;
  }
`