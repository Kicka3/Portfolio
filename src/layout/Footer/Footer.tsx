import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {WhatsUpIconFooter} from "../../components/svgIcons/icons/WhatsUpIconFooter";
import {TelegramIconFooter} from "../../components/svgIcons/icons/TelegramIconFooter";
import {LinkedInIconFooter} from "../../components/svgIcons/icons/LinkedInIconFooter";
import {BgImgFooterTwo} from "../../components/backGrounds/BgImgFooterTwo";
import {BgImgFooter} from "../../components/backGrounds/BgImgFooter";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import {Icon} from "../../components/icon/icon";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper marginB={"195px"} marginT={"65px"}>
                    {/*<SocialIconLink>*/}

                    <FlexWrapper gap={"40px"}>
                        <WhatsUpIconFooter/>
                        <TelegramIconFooter/>
                        <LinkedInIconFooter/>
                    </FlexWrapper>

                    {/*<FlexWrapper gap={"40px"} wrap={"wrap"}>*/}
                    {/*    <SocialList>*/}
                    {/*        <SocialItem>*/}
                    {/*            <SocialLink>*/}
                    {/*                /!*<WhatsUpIconFooter/>*!/*/}
                    {/*                <Icon iconId={"whatsUpIconFooter"} width={"50px"} height={"50px"} viewBox={"0 0 50 50"}/>*/}
                    {/*            </SocialLink>*/}
                    {/*        </SocialItem>*/}

                    {/*        <SocialItem>*/}
                    {/*            <SocialLink>*/}
                    {/*                <Icon iconId={"TelegramFooter"} width={"50px"} height={"50px"} viewBox={"0 0 50 50"}/>*/}
                    {/*                /!*<TelegramIconFooter/>*!/*/}
                    {/*            </SocialLink>*/}
                    {/*        </SocialItem>*/}

                    {/*        <SocialItem>*/}
                    {/*            <SocialLink>*/}
                    {/*                <Icon iconId={"linkedInFooter"} width={"50px"} height={"50px"} viewBox={"0 0 50 50"}/>*/}
                    {/*                /!*<LinkedInIconFooter/>*!/*/}
                    {/*            </SocialLink>*/}
                    {/*        </SocialItem>*/}
                    {/*    </SocialList>*/}
                    {/*</FlexWrapper>*/}

                    {/*</SocialIconLink>*/}
                </FlexWrapper>

                <BgImgFooter/>
                <BgImgFooterTwo/>
                <StyledSmall>Coded by Oz Kirill</StyledSmall>
                <Copyright>All Rights Reserved 2023</Copyright>

            </Container>
        </StyledFooter>
    );
};

const SocialList = styled.ul`

`;

const SocialItem = styled.li`

`;

const SocialLink = styled.a`

`;







const StyledFooter = styled.footer`

`;

const SocialIconLink = styled.nav`

`;

const StyledSmall = styled.small`
  color: ${theme.whiteThemeColors.primaryBg};
  z-index: 9999999;
  position: relative;
  top: -165px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter, sans-serif;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 8px;
`;

const Copyright = styled.small`
  color: ${theme.whiteThemeColors.primaryBg};
  z-index: 9999999;
  position: relative;
  top: -165px;
  font-family: Inter, sans-serif;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

