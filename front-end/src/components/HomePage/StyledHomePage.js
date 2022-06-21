import styled from 'styled-components';

// Header Logo ------------------------------------------------
export const Header = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #222;
  padding: 16px;
  z-index: 1000;
  margin-top: 1%;
  margin-left: 25%;
  margin-right: 25%;
  margin-bottom: 5%;
  background-color: rgba(255,248,220, 0.7);
  backdrop-filter: blur(8px);
  transition: all 0.4s;
  text-align: center;
  color: DarkSlateGray;
  font-family:'Lantinghei SC';
  font-size: 16px;

  -webkit-animation: breathing 1s ease-out infinite normal;
  animation: breathing 10s ease-out infinite normal;
  -webkit-font-smoothing: antialiased;  

  @-webkit-keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
  

  @keyframes breathing {
    0% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    25% {
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    60% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }

    100% {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
    }
  }
`


// Background --------------------------------------------------
export const Background = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #222;
  padding: 16px;
  margin: 10px;
  margin-top: 5%;
  margin-left: 15%;
  margin-right: 15%;
  z-index: 1000;
  // background-color: rgba(255,255,255, 0.1);
  backdrop-filter: blur(8px);
  transition: all 0.4s;
  text-align: center;
`
// Create Mission ------------------------------------------------
export const Insert = styled.input`
  text-align: center;
  border-radius: 20px;
  border: 0px;
  box-shadow: 0 0 8px 0 #222;
  padding: 8px;
  margin-right: 16px;
  margin-left: 16px;
  z-index: 3000;
  cursor: pointer;
  background-color: Cornsilk;
  transition: all 0.4s;
  color: DarkSlateGray;
`
export const Create = styled.button`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #222;
  border: 0;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0px;
  z-index: 3000;
  cursor: pointer;
  color: Cornsilk;
  background-color: DarkSlateGray;
  transition: all 0.4s;
  text-align: center;

  &:hover {
    color: DarkSlateGray;
    background-color: Cornsilk;
  }
`

// Search Mission ------------------------------------------------
export const Search = styled.input`
  text-align: center;
  border-radius: 20px;
  border: 0px;
  box-shadow: 0 0 8px 0 #222;
  padding: 16px;
  z-index: 3000;
  cursor: pointer;
  margin-top: 20px;
  background-color: Cornsilk;
  transition: all 0.4s;
  color: DarkSlateGray;
`

export const Mission = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 8px 0 #222;
  padding: 16px;
  margin: 10px;
  margin-bottom: 0px;
  z-index: 3000;
  cursor: pointer;
  background-color: DarkSlateGray;
  color: Cornsilk;
  transition: all 0.4s;
  text-align: left;
  text-transform: uppercase;
  
  &:hover {
    box-shadow: 0 0 28px 0 #222;
    color: DarkSlateGray;
    background-color: Cornsilk;
    transform: scale(1.02);
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
  filter: blur(8px);
`;

export const StyledHeader = styled.h1`

`