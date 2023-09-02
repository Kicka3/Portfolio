
import styled from "styled-components";
import moon from "../../assets/images/moon.webp";



 export const MoonStyled = styled.svg`
  background: url(${moon});
  width: 36px;
  height: 37px;
  cursor: pointer;
  transition: .5s;

  &:hover {
   transform: scale(1.1) rotate(10deg);
   //transition: .5s;
  }
 `;





