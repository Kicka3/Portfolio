import React, {PropsWithChildren, ReactNode} from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {FlexWrapper} from "../../../../components/FlexWrapper";


type ContactDecsPropsType = {
    locTitle?: string,
    locDesc?: string,
    // children: ReactNode,
}

export const ContactDecs = (props: PropsWithChildren<ContactDecsPropsType>) => {
    return (
            <FlexWrapper direction={"column"}  align={"flex-start"} wrap={"wrap"}>
                <LocationTitle>{props.locTitle}</LocationTitle>
                <LocationDesc>{props.locDesc}</LocationDesc>
            </FlexWrapper>
    );
};


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