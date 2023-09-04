import React, {ReactNode} from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";

type ButtonsWrapperPropsType = {
    background?: string,
    color?: string,
    fSize?: string,
    width?: string,
    height?: string,
    borderRadius?: string,
    padding?: string,
    marginT?: string,
    marginB?: string,
    activeColor?: string,
    hoverColor?: string,
    href?: string,
    children: ReactNode,
}

export const Button = (props:ButtonsWrapperPropsType) => {
    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    );
};

export const StyledButton = styled.a<ButtonsWrapperPropsType>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.background || "transparent"};
   font-size: ${props => props.fSize || "15px"};
  color: ${props => props.color};
  padding: ${props => props.padding};
  margin-top: ${props => props.marginT};
  margin-bottom: ${props => props.marginB};
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  
  &:hover {
    background-color: ${theme.whiteThemeColors.fontSix};
    border-radius: 20px;
    color: ${theme.whiteThemeColors.primaryBg};
  }
  
  &:active {
    transform: translateY(-2px);
    color: ${theme.whiteThemeColors.primaryBg};
  }

  @media ${theme.media.newTablet895} {
    width: 174px;
  }
  
  @media ${theme.media.newTablet677} {
    margin-top: 22px;
  }
  
  @media ${theme.media.newTablet610} {
    width: 142px;
    height: 43px;
  }
  
  @media ${theme.media.mobile466} {
    //width: 123px;
    //height: 50px;
    display: none;
    
  }
  
  
  
`;