import React, {ReactNode} from 'react';
import styled from "styled-components";

type ButtonsWrapperPropsType = {
    background?: string,
    color?: string,
    fSize?: string,
    width?: string,
    height?: string,
    borderRadius?: string,
    padding?: string,
    children: ReactNode
}

export const Button = (props:ButtonsWrapperPropsType) => {
    return (
        <StyledButton {...props}>{props.children}</StyledButton>
    );
};

export const StyledButton = styled.a<ButtonsWrapperPropsType>`
  min-width: ${props => props.width};
  min-height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  background: ${props => props.background || "transparent"};
  font-size: ${props => props.fSize || "15px"};
  color: ${props => props.color};
  padding: ${props => props.padding};
  cursor: pointer;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  outline: none;
  text-decoration: none;
  
  :hover {
    background-color: blueviolet;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 4px #cbd6ee;
`;