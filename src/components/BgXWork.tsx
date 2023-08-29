import React from 'react';
import styled from "styled-components";
import BgXImg from "../assets/images/BgXWork.png";


export const BgXWork = () => {
    return (
        <StyledBgXWork/>
    );
};

const StyledBgXWork = styled.div`
  background-image: url("${BgXImg}");
  width: 383px;
  height: 346px;
  right: -82px;
  bottom: -161px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 0;
`;