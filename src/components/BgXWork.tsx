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
  width: 382.906px;
  height: 346.482px;
  right: -82px;
  bottom: -161px;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 0;
`;