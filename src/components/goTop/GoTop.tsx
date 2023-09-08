import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/icon";
import {theme} from "../../styles/Theme";

export const GoTop = () => {
   return (
      <StyledGoTop>
            <Icon iconId={"goTop"} height={"40px"} width={"40px"} viewBox={"0 0 40 40"} color={theme.whiteThemeColors.primaryBg}/>
      </StyledGoTop>
   );
};

const StyledGoTop = styled.button`
  cursor: pointer;
   width: 61px;
   height: 201px;
   filter: drop-shadow(2px 1px 14px rgba(0, 0, 0, 0.10));
   background-color: ${theme.whiteThemeColors.goTopBtn};
   
   position: fixed;
   z-index: 1;
   bottom: 314px;
   left: 0;
`;