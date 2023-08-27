import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {WhatsUpIconFooter} from "../../components/svgIcons/icons/WhatsUpIconFooter";
import {TelegramIconFooter} from "../../components/svgIcons/icons/TelegramIconFooter";
import {LinkedInIconFooter} from "../../components/svgIcons/icons/LinkedInIconFooter";
import {BgImgFooterTwo} from "../../components/backGrounds/BgImgFooterTwo";
import {BgImgFooter} from "../../components/backGrounds/BgImgFooter";


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

            <div>
                <BgImgFooter/>
                <BgImgFooterTwo/>
            <StyledSmall>Coded by Oz Kirill</StyledSmall>
            </div>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`;

const SocialIconLink = styled.nav`

`;

const StyledSmall = styled.small`
  z-index: 9999999;
  position: relative;
  top: -165px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
  font-family: Inter;
  font-size: 17px;
  font-weight: 700;
`;

