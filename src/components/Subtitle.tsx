import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";


type SubTitlePropsType = {
    color?: string,
    size?: string,
    lineH?: string,
}


export const Subtitle = styled.h3<SubTitlePropsType>`
  color: ${theme.whiteThemeColors.fontThree};
  font-size: ${props => props.size || "15px"};
  line-height: ${props => props.lineH || "26px"};
  margin-bottom: 70px;
  margin-top: 40px;
`;

