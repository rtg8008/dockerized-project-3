import styled from 'styled-components';

// Buttons -------------------------------------
export const BackMission = styled.button`
  position: fixed;
  top: 10px;
  left: 16px;
  width: 150px;
  height: auto;
  border-radius: 10px;
  border: 0px;
  box-shadow: 0 0 8px 0 #222;
  padding: 8px 8px;
  z-index: 3000;
  cursor: pointer;
  background-color: rgba(255,255,255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 16px 0 #222;
    background-color: DarkSlateGray;
    transform: scale(1.1);
    color: Cornsilk;
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
  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;


// Equipment Details --------------------------------------------
export const Image = styled.img`
  border-radius: 50%;
  width: 250px;
  height: auto;
  margin-top: 10px;
  padding: 4px 4px;
  z-index: 3000;
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 0 28px 0 #222;
    background-color: #222;
    transform: scale(1.1);
  }
`

export const Details = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #222;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0px;
  z-index: 2000;
  background-color: DarkSlateGray;
  color: Cornsilk;
  transition: all 0.4s;
  }
`
export const AddMission = styled.img`
  width: 25px;
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
    box-shadow: 0 0 16px 0 #222;
    background-color: DarkSlateGray;
    transform: scale(1.1);
  }
`