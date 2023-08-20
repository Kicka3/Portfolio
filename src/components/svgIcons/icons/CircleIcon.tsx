import React from 'react';
import styled from "styled-components";

export const CircleIcon = () => {
    return (
        <CircleIconStyled>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="9" r="9" fill="#D9D9D9"/>
                <circle cx="9" cy="9" r="9" fill="url(#paint0_linear_11_4132)"/>
                <defs>
                    <linearGradient id="paint0_linear_11_4132" x1="9" y1="0" x2="9" y2="18" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#A6BCFA"/>
                        <stop offset="1" stop-color="#2157F2"/>
                    </linearGradient>
                </defs>
            </svg>
        </CircleIconStyled>
    );
};

const CircleIconStyled = styled.svg`
  width: 18px;
  height: 18px;
`;

