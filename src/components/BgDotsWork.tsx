import React from 'react';
import BgDots from "../assets/images/BgDots.png";
import styled from "styled-components";

export const BgDotsWork = () => {
    return (
        <StyledBgDotsWork/>
    );
};

const StyledBgDotsWork = styled.div`
  background-image: url("${BgDots}");
  width: 413px;
  height: 505px;
  padding: 0.002px 0px 0.765px 0px;
  position: absolute;
  z-index: 0;
  top: 109px;
  background-repeat: no-repeat;
  background-size: contain;
`;