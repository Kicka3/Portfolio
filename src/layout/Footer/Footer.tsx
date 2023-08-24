import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {WhatsUpIconFooter} from "../../components/svgIcons/icons/WhatsUpIconFooter";
import {TelegramIconFooter} from "../../components/svgIcons/icons/TelegramIconFooter";
import {LinkedInIconFooter} from "../../components/svgIcons/icons/LinkedInIconFooter";
import {Icon} from "../../components/icon/icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper marginB={"60px"} >
                <SocialIconLink>
                    <WhatsUpIconFooter/>
                    <TelegramIconFooter/>
                    <LinkedInIconFooter/>
                </SocialIconLink>
            </FlexWrapper>
            <Icon iconId="BgFooter" width={"100%"} height={"253px"} viewBox={"0 1440 253"}/>
            <StyledSmall>Coded by Oz Kirill</StyledSmall>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`;

const SocialIconLink = styled.a`
  cursor: pointer;
`;

const StyledSmall = styled.small`
  color: #eb0f0f;
  font-family: Inter;
  font-size: 20px;
`;
