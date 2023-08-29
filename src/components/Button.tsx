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
    marginT?: string,
    marginB?: string,
    children: ReactNode
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
  
  :hover {
    background-color: blueviolet;
  }
  
`;