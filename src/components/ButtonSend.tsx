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
  background-color: ${theme.whiteThemeColors.accent};
  //margin-top: 37px;
  width: 117px;
  height: 43px;
  border-radius: 9px;
`;