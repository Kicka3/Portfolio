import React from 'react';
import styled from "styled-components";
import {font} from "../styles/Common";



type HThreeTitlePropsType = {
    title?: string,
    lineH?: string,
    marginB?: string,
    marginT?: string,
}
export const HThreeTitle = (props: HThreeTitlePropsType) => {
    return (
        <StyledHThreeTitle marginB={props.marginB}>{props.title}</StyledHThreeTitle>
    );
};

const StyledHThreeTitle = styled.h3<Omit<HThreeTitlePropsType, 'title'>>`
  ${font({family: "Roboto , sans-serif", weight: "500", Fmin: 20, Fmax: 48})};
  margin-bottom: ${props => props.marginB};
  margin-top: ${props => props.marginT};
  line-height: ${props => props.lineH};
  
  
`;