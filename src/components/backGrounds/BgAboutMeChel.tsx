import React from 'react';
import styled from "styled-components";
import bgChel from "../../assets/images/Chel.png"
import {theme} from "../../styles/Theme";


export  const BgAboutMeChel = () => {
    return (
        <StyledBgAboutMeChel/>
    );
};

const StyledBgAboutMeChel = styled.div`
  display: flex;
  flex-shrink: 1;
  background-image: url("${bgChel}");
  max-width: 521px;
  width: 100%;
  height: 615px;
  position: relative;
  background-size: contain;
  background-repeat: no-repeat;
  top: -81%;
  left: 63%;
  z-index: 77777;

  @media ${theme.media.mobile1433} {
    top: -72%;
    left: 49%;
  }

  @media ${theme.media.mobile1060} {
    top: -60%;
    left: 46%;
    max-width: 433px;
  }

  @media ${theme.media.newTablet830} {
    display: none;
  }


`;