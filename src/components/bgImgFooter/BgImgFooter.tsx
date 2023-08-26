import React from 'react';
import styled from "styled-components";
import bgImgFooter from "../../assets/images/footerWave.jpg";

export const BgImgFooter = () => {
    return (
        <StyledBgImFooter/>
    );
};

const StyledBgImFooter = styled.div`
  min-width: 100%;
  height: 151px;
  background-repeat: no-repeat;
  background-image: url("${bgImgFooter}");
  z-index: 1;
  position: relative;
`;