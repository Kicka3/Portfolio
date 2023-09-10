import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const BgLeftPicture = () => {
    return (
        <StyledBgLeftPicture/>
    );
};

const StyledBgLeftPicture = styled.div`
  //min-width: 453px;
  width: 100%;
  height: 946px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  background-image: linear-gradient(90deg, #ffffff 0%, #A6BCFA 0% 31%, #ffffff 31%);
  //background-image: linear-gradient(90deg,#ffffff 12%,#A6BCFA 11% 35%,#ffffff 33%);
    //background-color: ${theme.whiteThemeColors.secondaryBg};
  //background: var(--gradient-heading,linear-gradient(90deg,#13B0F5 2.60%,#E70FAA 100%));
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;

  @media ${theme.media.mobile1110} {
    height: 1042px;
    background-image: linear-gradient(90deg, #ffffff 0%, #A6BCFA 0% 52%, #ffffff 31%);
  }
  

  @media ${theme.media.newTablet730} {
    //width: 358px;
    //height: 909px;
    height: 924px;
  }

  @media ${theme.media.newTablet677} {
    //width: 319px;
    height: 888px;
  }

  @media ${theme.media.mobile507} {
    //width: 242px;
    height: 864px;
  }
  
  @media ${theme.media.mobile425} {
    //height: 791px;
    background-image: linear-gradient(90deg,#ffffff 0%,#A6BCFA 0% 47%,#ffffff 31%);
  }
  
  @media ${theme.media.mobileIphone} {
    
    height: 800px;
  }
  
  @media ${theme.media.mobileIphone375} {
    //height: 791px;
    background-image: linear-gradient(90deg,#ffffff 0%,#A6BCFA 0% 52%,#ffffff 31%);
  }
`;