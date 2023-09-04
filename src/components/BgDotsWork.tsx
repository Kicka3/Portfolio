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
  max-width: 413px;
  width: 60%;
  height: 505px;
  position: absolute;
  z-index: 0;
  top: 109px;
  background-repeat: no-repeat;
  background-size: contain;
`;