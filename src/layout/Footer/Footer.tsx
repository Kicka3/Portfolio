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
                <SocialIconLink>
                    <FlexWrapper gap={"40px"}>
                        <WhatsUpIconFooter/>
                        <TelegramIconFooter/>
                        <LinkedInIconFooter/>
                    </FlexWrapper>
                </SocialIconLink>
            </FlexWrapper>
            <BgImFooter/>
            <StyledSmall>Coded by Oz Kirill</StyledSmall>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`;

const SocialIconLink = styled.nav`
    
`;

const StyledSmall = styled.small`
  color: #eb0f0f;
  font-family: Inter;
  font-size: 20px;
`;

const BgImFooter = styled.img`
  background-image: url("../../assets/images/footerWave.jpg");
`;