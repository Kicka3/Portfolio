import React from 'react';
import styled from "styled-components";
import locImg from "../../../../../assets/images/location.png";
import {theme} from "../../../../../styles/Theme";

export const LocationImg = () => {
    return (
        <LocationDescLink href={"https://www.google.com/maps/place/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3,+%D0%A1%D0%B2%D0%B5%D1%80%D0%B4%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB./@56.8043482,60.2586402,10z/data=!4m6!3m5!1s0x43c165eaa062db4b:0xd50243d7f7567f20!8m2!3d56.8430993!4d60.6454086!16zL20vMGhrcG4?entry=ttu"}
                            target={"_blank"}>
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