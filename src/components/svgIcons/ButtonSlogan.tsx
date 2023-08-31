import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const ButtonSlogan = () => {
    return (
        <ButtonSloganStyled>Contact Me</ButtonSloganStyled>
    );
};

const ButtonSloganStyled = styled.a`
  color: ${theme.whiteThemeColors.primaryBg};
  background-color: ${theme.whiteThemeColors.accent};
  width: 117px;
  height: 43px;
  border-radius: 9px;
`;