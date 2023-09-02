import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/icon";
import {BgImgFooter} from "../../components/backGrounds/BgImgFooter";
import {BgImgFooterTwo} from "../../components/backGrounds/BgImgFooterTwo";
import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const NewFooter = () => {
    return (
        <StyledFooter>
            <Container>

                <FlexWrapper marginB={"195px"} marginT={"90px"}>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={"vkFooter"} height={"50px"} width={"50px"} viewBox={"0 0 16 16"}/>
                                <Icon iconId={"linkedInFooter"} height={"50px"} width={"50px"} viewBox={"0 0 16 16"}/>
                                <Icon iconId={"whatsUpFooter"} height={"50px"} width={"50px"} viewBox={"0 0 16 16"}/>
                                <Icon iconId={"telegramFooter"} height={"50px"} width={"50px"} viewBox={"0 0 16 16"}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>

                <BgImgFooter/>
                <BgImgFooterTwo/>
                <StyledSmall>Coded by Oz Kirill</StyledSmall>
                <Copyright>All Rights Reserved 2023</Copyright>

            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`

`;

const SocialList = styled.ul`

`;

const SocialItem = styled.li`

`;

const SocialLink = styled.a`

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

