import styled from "styled-components";
import {theme} from "../styles/Theme";

type FlexWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    gap?: string,
    flexFlow?: string,
    marginL?: string,
    marginR?: string,
    marginB?: string,
    marginT?: string,
    height?: string,
    alignContent?: string,
    rowGap?: string,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap || "no-wrap"};
  gap: ${props => props.gap};
  flex-flow: ${props => props.flexFlow};
  margin-left: ${props => props.marginL};
  margin-right: ${props => props.marginR};
  margin-bottom: ${props => props.marginB};
  margin-top: ${props => props.marginT};
  height: ${props => props.height};
  align-content: ${props => props.alignContent};
  row-gap: ${props => props.rowGap};
`;