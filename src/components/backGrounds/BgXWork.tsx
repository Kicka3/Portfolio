import React from 'react';
import styled from "styled-components";
import BgXImg from "../../assets/images/BgXWork.png";
import {theme} from "../../styles/Theme";


export const BgXWork = () => {
    return (
        <StyledBgXWork/>
    );
};

const StyledBgXWork = styled.div`
  background-image: url("${BgXImg}");
  width: 383px;
  height: 346px;
  position: absolute;
  background-size: contain;
  z-index: 0;
  bottom: -148px;
  right: 16px;
  background-position-y: bottom;
  background-position-x: right;
  background-repeat: no-repeat;

  @media ${theme.media.mobileIphone} {
    width: 253px;
    height: 226px;
  }
`;