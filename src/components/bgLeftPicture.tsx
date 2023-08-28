import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";


export const BgLeftPicture = () => {
    return (
        <StyledBgLeftPicture/>
    );
};

const StyledBgLeftPicture = styled.div`
  width: 506px;
  height: 946px;
  background-color: ${theme.whiteThemeColors.secondaryBg};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;