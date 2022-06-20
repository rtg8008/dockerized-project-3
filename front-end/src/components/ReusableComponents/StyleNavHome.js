import styled from 'styled-components';

export const Logo = styled.img`
  position: fixed;
  top: 16px;
  right: 16px;
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