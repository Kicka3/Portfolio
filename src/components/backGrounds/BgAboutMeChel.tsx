import React from 'react';
import styled from "styled-components";
import bgChel from "../../assets/images/Chel.png"


export  const BgAboutMeChel = () => {
    return (
        <StyledBgAboutMeChel/>
    );
};

const StyledBgAboutMeChel = styled.div`
  background-image: url("${bgChel}");
  width: 521px;
  height: 615px;
  flex-shrink: 0;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 85px;
  left: 574px;
`;