import React from 'react';
import styled from "styled-components";
// import bgImgFooter from "../../assets/images/footerWave.jpg";
import bgImgFooter from "../../assets/images/footerWave2.png";
import {theme} from "../../styles/Theme";

export const BgImgFooter = () => {
    return (
        <StyledBgImFooter/>
    );
};

const StyledBgImFooter = styled.div`
  //min-width: 100%;
  max-width: 5000px;
  height: 240px;
  background-repeat: no-repeat;
  z-index: 0;
  position: relative;
  background-image: url("${bgImgFooter}");
  background-position: center;
  background-size: cover;

  
  
  @media ${theme.media.mobile1060} {
    height: 142px;
    bottom: -86px;
  }
  
  @media ${theme.media.newTablet768} {
    height: 111px;
    bottom: -113px;
  }
`;