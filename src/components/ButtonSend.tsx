import styled from "styled-components";

import React from 'react';
import {theme} from "../styles/Theme";

export const ButtonSend = () => {
    return (
        <ButtonStyled type={"submit"}>Send</ButtonStyled>

    );
};



const ButtonStyled = styled.button`
  color: ${theme.whiteThemeColors.primaryBg};
  background-color: ${theme.whiteThemeColors.fontFive};
  width: 117px;
  height: 43px;
  border-radius: 9px;
  cursor: pointer;
  
  &:hover {
    background-color: ${theme.whiteThemeColors.fontSix};
  }
  
  &:active {
    transform: translateY(3px);
  }

  @media ${theme.media.mobile493} {
    position: relative;
    left: 44px;
  }
  
  @media ${theme.media.mobileIphone375} {
    position: relative;
    left: 64px;
  }
`;