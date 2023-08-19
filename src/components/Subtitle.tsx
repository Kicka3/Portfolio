import React from 'react';
import styled from "styled-components";


type SubTitlePropsType = {
    color?: string,
    size?: string,
    lineH?: string,
}


export const Subtitle = styled.h3<SubTitlePropsType>`
    color: ${props => props.color || "red"};
    font-size: ${props => props.size || "15px"};
    margin: 0 auto;
    line-height: ${props => props.lineH || "26px"};
`;

