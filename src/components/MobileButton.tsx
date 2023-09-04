import React, {ReactNode} from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";


type MobileButtonPropsType = {
    text: string,
    children: ReactNode,
}

export const MobileButton = (props: MobileButtonPropsType) => {
    return (
        <StyledMobileButton {...props}>{props.text}</StyledMobileButton>
    );
};

export const StyledMobileButton = styled.a<MobileButtonPropsType>`
  width: 112px;
  height: 30px;
  cursor: pointer;
  //display: flex;
  //justify-content: space-evenly;
  //align-items: center;
  //flex-wrap: wrap;
  
  &:hover {
    background-color: ${theme.whiteThemeColors.fontSix};
    border-radius: 20px;
    color: ${theme.whiteThemeColors.primaryBg};
  }
  
  &:active {
    transform: translateY(-2px);
    color: ${theme.whiteThemeColors.primaryBg};
  }
  display: none;
  
  @media ${theme.media.mobile466} {
   
    display: block;
  }
  
  
  
`;