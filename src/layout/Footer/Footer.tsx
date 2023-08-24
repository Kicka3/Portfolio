import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {WhatsUpIconFooter} from "../../components/svgIcons/icons/WhatsUpIconFooter";
import {TelegramIconFooter} from "../../components/svgIcons/icons/TelegramIconFooter";
import {LinkedInIconFooter} from "../../components/svgIcons/icons/LinkedInIconFooter";
import {FooterImg} from "../../components/svgIcons/icons/FooterIcon";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper marginB={"60px"} direction={"column"}>
                <SocialIconLink>
                    <WhatsUpIconFooter/>
                    <TelegramIconFooter/>
                    <LinkedInIconFooter/>
                </SocialIconLink>
            </FlexWrapper>
            <FooterImg/>
            <StyledSmall>Coded by Oz Kirill</StyledSmall>
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

const StyledSmall = styled.small`
  color: #eb0f0f;
  font-family: Inter;
  font-size: 20px;
  align-items: center;
  top: 100px;
`;
