import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {WhatsUpIconFooter} from "../../components/svgIcons/icons/WhatsUpIconFooter";
import {TelegramIconFooter} from "../../components/svgIcons/icons/TelegramIconFooter";
import {LinkedInIconFooter} from "../../components/svgIcons/icons/LinkedInIconFooter";
import {FooterIcon} from "../../components/svgIcons/icons/FooterIcon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper marginB={"60px"}>
                <SocialIconLink>
                    <WhatsUpIconFooter/>
                    <TelegramIconFooter/>
                    <LinkedInIconFooter/>
                </SocialIconLink>
            </FlexWrapper>
            <FooterIcon/>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`;

const SocialIconLink = styled.a`
  cursor: pointer;
  display: flex;
  gap: 20px;
  margin-bottom: 200px;
`;