import React from 'react';
import BgDots from "../assets/images/BgDots.png";
import styled from "styled-components";
import {theme} from "../styles/Theme";

export const BgDotsWork = () => {
    return (
        <StyledBgDotsWork/>
    );
};

const StyledBgDotsWork = styled.div`
  background-image: url("${BgDots}");
  max-width: 413px;
  width: 60%;
  height: 505px;
  position: absolute;
  z-index: 0;
  top: 109px;
  background-repeat: no-repeat;
  background-size: contain;
  
  @media ${theme.media.mobile1161} {
    top: 172px;
  }
  
  @media ${theme.media.mobileIphone} {
    top: 140px;
  }
  
`;