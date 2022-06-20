import styled from 'styled-components';

// Buttons -------------------------------------
export const AddEquipment = styled.img`
  position: fixed;
  top: 16px;
  left: 16px;
  width: 50px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 8px 0 #222;
  padding: 8px 8px;
  z-index: 3000;
  cursor: pointer;
  background-color: rgba(255,255,255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 28px 0 #222;
    background-color: DarkSlateGray;
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
  box-shadow: 0 0 8px 0 #222;
  padding: 8px 8px;
  z-index: 3000;
  cursor: pointer;
  background-color: rgba(255,255,255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 28px 0 #222;
    background-color: Maroon;
    transform: scale(1.1);
  }
`

// Background --------------------------------------------------
export const Background= styled.div`
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
export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 8px 0 #222;
  margin-top: 10px;
  z-index: 3000;
  cursor: pointer;
  border: 1px solid #222;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 16px 0 #222;
    background-color: #222;
    transform: scale(1.1);
  }
`

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
export const DeleteEquipmentFromMission = styled.img`
  width: 25px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 8px 0 #222;
  padding: 8px 8px;
  z-index: 3000;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 28px 0 #222;
    background-color: Maroon;
    transform: scale(1.1);
  }
`




