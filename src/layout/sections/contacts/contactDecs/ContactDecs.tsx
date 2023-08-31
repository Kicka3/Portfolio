import React, {PropsWithChildren, ReactNode} from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Icon} from "../../../../components/icon/icon";
import {LocationImg} from "./LocationImg";



type ContactDecsPropsType = {
    locTitle?: string,
    locDesc?: string,
    // children: ReactNode,
}

export const ContactDecs = (props: PropsWithChildren<ContactDecsPropsType>) => {
    return (
        <StyledLocation>
            {/*{ props.children }*/}
            <LocationImg/>
            <LocationTitle>{props.locTitle}</LocationTitle>
            <LocationDesc>{props.locDesc}</LocationDesc>
        </StyledLocation>
    );
};

const StyledLocation = styled.div<ContactDecsPropsType>`
  display: flex;
  
`;

const LocationTitle = styled.p`
  color: ${theme.whiteThemeColors.fontThree};
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;

const LocationDesc = styled.p`
  color: ${theme.whiteThemeColors.locationCityColor};
  font-family: Roboto, sans-serif;
  font-size: 12px;
`;