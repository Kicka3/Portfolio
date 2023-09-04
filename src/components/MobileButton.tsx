import React, {ReactNode} from 'react';
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


type MobileButtonPropsType = {
    text?: string,
    children: ReactNode,
    background?: string,
    color?: string,
    borderRadius?: string,
    padding?: string,
    marginT?: string,
    marginB?: string,
    activeColor?: string,
    hoverColor?: string,
}

export const MobileButton = (props: MobileButtonPropsType) => {
    return (
        <StyledMobileButton {...props}>{props.children}</StyledMobileButton>
    );
};

export const StyledMobileButton = styled.a<MobileButtonPropsType>`
  width: 112px;
  height: 30px;
  cursor: pointer;
  border-radius: ${props => props.borderRadius};
  background: ${props => props.background || "transparent"};
  color: ${props => props.color};
  margin-top: 42px;
  left: -7px;
  font-size: 15px;
  ${font({family: "Roboto , sans-serif", Fmin: 10, Fmax: 15})};

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
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  
  @media ${theme.media.mobileIphone399} {
    width: 88px;
    height: 27px;
  }


`;