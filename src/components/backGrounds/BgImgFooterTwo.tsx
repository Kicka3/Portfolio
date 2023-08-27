import React from 'react';
import styled from "styled-components";
import bgImgFooterTwo from "../../assets/images/footerWave.jpg";


export const BgImgFooterTwo = () => {
    return (
        <StyledBgImFooter/>
    );
};

const StyledBgImFooter = styled.div`
  min-width: 100%;
  height: 151px;
  background: no-repeat;
  background-image: url("${bgImgFooterTwo}");
  position: relative;
  top: -49px;
  background-color: transparent;
`;