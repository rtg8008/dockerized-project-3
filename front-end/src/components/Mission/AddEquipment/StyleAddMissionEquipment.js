import styled from 'styled-components';

// Buttons -------------------------------------
export const AddEquipment = styled.img`
  position: fixed;
  top: 16px;
  left: 16px;
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
    background-color: DarkSeaGreen;
    transform: scale(1.1);
  }
`

export const Delete = styled.img`
  position: fixed;
  top: 16px;
  left: 88px;
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
    background-color: IndianRed;
    transform: scale(1.1);
  }
`

// Background --------------------------------------------------
export const Background= styled.div`
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

// Equipment Details --------------------------------------------
export const Image = styled.img`
  border-radius: 50%;
  // box-shadow: 0 0 8px 0 #889baf;
  margin-top: 10px;
  padding: 4px 4px;
  z-index: 3000;
  cursor: pointer;
  // background-color: CadetBlue;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 28px 0 #889baf;
    background-color: Cornsilk;
    transform: scale(1.1);
  }
`

export const Category = styled.div`
  display: inline-block;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
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
  // display: grid;
  // grid-auto-column: auto;
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #889baf;
  // width: 40%;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0px;
  z-index: 3000;
  background-color: CadetBlue;
  color: Cornsilk;
  transition: all 0.4s;
  // text-align: center;
  }
`