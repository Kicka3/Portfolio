import React from 'react';
import iconsSprite from '../../assets/images/iconsSprite2.svg'
import styled from "styled-components";
import {theme} from "../../styles/Theme";


type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    color?: string,
}


export const Icon = (props: IconPropsType) => {
    return (
        <StyledSvg width={props.width || "16"} height={props.height || "17"} viewBox={props.viewBox || "0 0 16 17"}
             fill={props.color} color={props.color} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </StyledSvg>
    );
};

const StyledSvg = styled.svg`
`;