import React from 'react';
import styled from "styled-components";
import locImg from "../../../../../assets/images/location.png";
import {theme} from "../../../../../styles/Theme";

export const LocationImg = () => {
    return (
        <LocationDescLink>
            <StyledLocationImg/>
        </LocationDescLink>
    );
};

const StyledLocationImg = styled.div`
  background-image: url("${locImg}");
  width: 38px;
  height: 38px;
  background-repeat: no-repeat;
`;

const LocationDescLink = styled.a`
  cursor: pointer;

  &:hover {
   
    transform: scale(1.1);
    color: ${theme.whiteThemeColors.fontSix};
  }
`;