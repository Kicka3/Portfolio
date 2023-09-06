import React from 'react';
import styled from "styled-components";
// import bgImgFooter from "../../assets/images/footerWave.jpg";
import bgImgFooter from "../../assets/images/footerWave2.png";

export const BgImgFooter = () => {
    return (
        <StyledBgImFooter/>
    );
};

const StyledBgImFooter = styled.div`
  //min-width: 100%;
  max-width: 5000px;
  height: 240px;
  background-repeat: no-repeat;
  z-index: 0;
  position: relative;
  background-image: url("${bgImgFooter}");
  background-position: center;
  background-size: cover;
`;