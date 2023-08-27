import React from 'react';
import iconsSprite from '../../assets/images/iconsSprite2.svg'


type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?: string,
    color?: string,
}


export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || "16"} height={props.height || "17"} viewBox={props.viewBox || "0 0 16 17"}
             fill={props.color} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

