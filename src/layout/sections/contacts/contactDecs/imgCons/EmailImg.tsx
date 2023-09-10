import React from 'react';
import emailImg from "../../../../../assets/images/email.png";
import styled from "styled-components";
import {theme} from "../../../../../styles/Theme";

export const EmailImg = () => {
    return (
        <LocationDescLink>
            <StyledEmailImg/>
        </LocationDescLink>
    );
};

const StyledEmailImg = styled.div`
  background-image: url("${emailImg}");
  width: 38px;
  height: 38px;
  background-repeat: no-repeat;
`;

const LocationDescLink = styled.a`
  cursor: pointer;

  &:hover {
    //transform:translateY(4px);
    transform: scale(1.1);
    color: ${theme.whiteThemeColors.fontSix};
  }
`;
