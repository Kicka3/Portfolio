import React from 'react';
import styled from "styled-components";
import bgImgFooterTwo from "../../assets/images/footerWave.jpg";


export const BgImgFooterTwo = () => {
    return (
        <StyledBgImFooter/>
    );
};

const StyledBgImFooter = styled.div`
  //min-width: 100%;
  max-width: 5000px;
  height: 151px;
  position: relative;
  top: -49px;
  background-size: cover;
  background: transparent url("${bgImgFooterTwo}") no-repeat center;
`;