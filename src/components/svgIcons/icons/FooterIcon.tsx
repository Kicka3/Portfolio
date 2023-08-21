import React from 'react';
import styled from "styled-components";

export const FooterIcon = () => {
    return (
        <>
            <StyledFooterIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="153" viewBox="0 0 1440 153" fill="none">
                    <path
                        d="M-1201.13 44.7823C-1201.13 44.7823 -1099.63 4.58005 -959.747 1.09382C-795.61 -2.99693 -797.448 43.8551 -631.47 44.7823C-458.116 45.7507 -452.498 1.45838 -279.055 1.09382C-102.606 0.722937 -93.2496 46.1381 83.0148 44.7823C248.904 43.5064 245.484 2.62348 411.292 1.09382C589.739 -0.552463 601.88 45.1485 780.603 44.7823C956.299 44.4224 964.581 1.62913 1140.26 1.09382C1320.49 0.544628 1334.92 47.4908 1514.4 44.7823C1674.03 42.3734 1664.41 4.47381 1823.36 1.09382C2012.07 -2.91869 2038.61 44.0492 2228.88 44.7823C2426.27 45.5428 2458.7 0.593025 2656.13 1.09382C2848.79 1.58254 2876.48 43.1002 3068.89 44.7823C3278.92 46.6186 3326.67 -3.87903 3534.75 1.09382C3715.81 5.42086 3889.58 50.6335 3889.58 50.6335V71.5385V152.59H-1201.13V44.7823Z"
                        fill="#A5BBF8"/>
                </svg>
            </StyledFooterIcon>
            <StyledSmall>Coded by Alireza Kavousy nezhad</StyledSmall>
        </>
    );
}

const StyledFooterIcon = styled.svg`
  width: 5090px;
  min-height: 20vh;
  position: absolute;
`;

const StyledSmall = styled.small`
  color: #eb0f0f;
  font-family: Inter;
  font-size: 20px;
  align-items: center;
  position: relative;
  left: 50%;
  top: 100px;
`;