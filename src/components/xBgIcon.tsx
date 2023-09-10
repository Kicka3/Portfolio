import React from 'react';
import styled from "styled-components";
import XIcon from "../assets/images/x.png"
import {theme} from "../styles/Theme";


export const XBgIcon = () => {
    return (
        <StyledXBgIcon/>
    );
};

const StyledXBgIcon = styled.div`
  background-image: url("${XIcon}");
  max-width: 120px;
  width: 100%;
  height: 120px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 563px;
  top: 192px;

  @media ${theme.media.mobile1110} {
    left: 743px;
    top: 66px;
  }

  @media ${theme.media.mobile1000} {
    left: 660px;
  }

  @media ${theme.media.newTablet895} {
    left: 570px;
  }

  @media ${theme.media.newTablet808} {
    left: 522px;
  }

  @media ${theme.media.tablet} {
    left: 492px;
    top: 82px;
  }

  @media ${theme.media.newTablet677} {
    left: 458px;
  }

  @media ${theme.media.newTablet677} {
    left: 404px;
  }
  
  @media ${theme.media.mobile560} {
    left: 339px;
  }
  
  @media ${theme.media.mobile507} {
    left: 260px;
  }

  @media ${theme.media.mobileIphone375} {
    left: 229px;
  }

`;