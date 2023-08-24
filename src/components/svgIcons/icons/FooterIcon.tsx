import React from 'react';
import styled from "styled-components";
import FooterImgWave from "../../../../src/assets/images/footerWave.jpg";


export const FooterImg = () => {
    return (
        <StyledFooterImg/>
    );
}


const StyledFooterImg = styled.img`
  //background-image: url("/src/assets/images/footerWave.jpg");
  background-image: url("/src/assets/images/footerWave.jpg");
 
`;

//Не нужен
// const StyledFooterIcon = styled.svg`
//   width: 5090px;
//   min-height: 20vh;
//   position: absolute;
// `;

