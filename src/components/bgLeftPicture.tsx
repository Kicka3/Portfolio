import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";


export const BgLeftPicture = () => {
    return (
        <StyledBgLeftPicture/>
    );
};

const StyledBgLeftPicture = styled.div`
  width: 468px;
  height: 946px;
  background-color: ${theme.whiteThemeColors.secondaryBg};
  
  
 
  z-index: 0;
`;