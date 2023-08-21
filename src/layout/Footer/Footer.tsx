import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {WhatsUpIconFooter} from "../../components/svgIcons/icons/WhatsUpIconFooter";
import {TelegramIconFooter} from "../../components/svgIcons/icons/TelegramIconFooter";
import {LinkedInIconFooter} from "../../components/svgIcons/icons/LinkedInIconFooter";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper marginB={"60px"}>
                <WhatsUpIconFooter/>
                <TelegramIconFooter/>
                <LinkedInIconFooter/>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  
`;