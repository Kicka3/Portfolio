import React from 'react';
import styled from "styled-components";
import OBgImg from "../assets/images/Ellipse.png"
import {theme} from "../styles/Theme";

export const CircleBg = () => {
    return (
        <StyledCircleBg/>
    );
};

const StyledCircleBg = styled.div`
  background-image: url("${OBgImg}");
  position: absolute;
  width: 152px;
  height: 152px;
  stroke-width: 25px;
  stroke: rgba(33, 87, 242, 0.40);
  right: 139px;
  bottom: -13px;
  transform: rotate(-45deg);
  background-size: contain;
  background-repeat: no-repeat;

  @media ${theme.media.newTablet730} {
    right: 91px;
  }

  @media ${theme.media.newTablet677} {
    right: 66px;
  }

  @media ${theme.media.newTablet677} {
    right: 40px;
  }

  @media ${theme.media.newTablet610} {
    bottom: -60px;
    right: 20px;
  }

  @media ${theme.media.newTablet677} {
    right: 55px;
  }
  

`;