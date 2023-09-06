

type FontPropsType = {
    family?: string,
    weight?: string,
    // color?: string,
    lineHeight?: string,
    Fmin?: number,
    Fmax?: number,
}

export const font = ({family, weight, lineHeight, Fmin, Fmax} : FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
    // color: ${"color"};  color,
`;