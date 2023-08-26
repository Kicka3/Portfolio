import styled from "styled-components";

type ButtonsWrapperPropsType = {
    background?: string,
    color?: string,
}

export const ButtonsWrapper = styled.a<ButtonsWrapperPropsType>`
  width: 200px;
  height: 54px;
  border-radius: 20px;
  background: ${props => props.background || "#transparent"};
  font-size: 15px;
  color: ${props => props.color || "#fff"};
  margin-right: 32px;
`;