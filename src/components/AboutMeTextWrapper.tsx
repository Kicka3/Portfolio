import React from 'react';
import styled from "styled-components";

export const AboutMeTextWrapper = () => {
    return (
        <AboutMeTextWrapperStyled>
            <AboutMeTextStyled>I'm <span>Kirill</span> Ozornin</AboutMeTextStyled>
        </AboutMeTextWrapperStyled>
    );
};

const AboutMeTextWrapperStyled = styled.div`
  width: 563px;
  height: 491px;
  flex-shrink: 0;

  border-radius: 0px 100px;
  background: linear-gradient(132deg, rgba(255, 255, 255, 0.50) 0%, rgba(0, 71, 255, 0.05) 100%);
  backdrop-filter: blur(10px);

`;

const AboutMeTextStyled = styled.h2`
  color: #393939;
  font-family: Roboto;
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: 136%; /* 81.6px */

  & span {
    color: #2157F2;
  }
`;

