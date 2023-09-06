import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";


export const BgLeftPicture = () => {
    return (
        <StyledBgLeftPicture/>
    );
};

const StyledBgLeftPicture = styled.div`
  width: 453px;
  height: 946px;
  background-color: ${theme.whiteThemeColors.secondaryBg};
  //background: var(--gradient-heading,linear-gradient(90deg,#13B0F5 2.60%,#E70FAA 100%));
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  @media ${theme.media.mobile1110} {
    height: 1060px;
  }

  @media ${theme.media.tablet} {
    width: 400px;
  }

  @media ${theme.media.newTablet730} {
    width: 358px;
    height: 909px;
  }

  @media ${theme.media.newTablet677} {
    width: 319px;
  }

  @media ${theme.media.mobile507} {
    width: 242px;
  }

  @media ${theme.media.mobile444} {
    width: 199px;
    height: 869px;
  }

  @media ${theme.media.mobileIphone} {
    height: 791px;
    
  }
`;