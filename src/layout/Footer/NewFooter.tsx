import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/icon";
import {BgImgFooter} from "../../components/backGrounds/BgImgFooter";
import {BgImgFooterTwo} from "../../components/backGrounds/BgImgFooterTwo";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import {GoTop} from "../../components/goTop/GoTop";


export const NewFooter = () => {
    return (
        <StyledFooter>
            <Container>

                <FlexWrapper wrap={"wrap"} marginB={"195px"} marginT={"90px"}>
                    <SocialList>

                        <SocialItem>
                            <SocialLink href={"https://vk.com/yareyaredaz"} target="_blank">
                                <Icon color={theme.iconsColor.vkFooter} iconId={"vkFooter"} height={"50px"} width={"50px"} viewBox={"0 0 16 16"}/>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink href={"https://www.linkedin.com/in/kirill-ozornin-904768264/"} target="_blank">
                                <Icon color={theme.iconsColor.linkedInFooter} iconId={"linkedInFooter"} height={"50px"} width={"50px"} viewBox={"0 0 16 16"}/>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink href={"https://wa.me/79193822014?text=Здравствуйте,%20давайте%20заинтересовало%20Ваше%20резюме,%20давайте%20кодить%20вместе!%20"} target="_blank">
                            <Icon color={theme.iconsColor.whatUpFooter} iconId={"whatsUpFooter"} height={"50px"} width={"50px"} viewBox={"0 0 16 16"}/>
                            </SocialLink>
                        </SocialItem>

                        <SocialItem>
                            <SocialLink href={"https://t.me/Kesarcjer/"} target="_blank">
                                <Icon color={theme.iconsColor.telegramFooter} iconId={"telegramFooter"} height={"50px"} width={"50px"} viewBox={"0 0 16 16"}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                </FlexWrapper>

                <StyledSmall>Coded by Oz Kirill</StyledSmall>
                <Copyright>All Rights Reserved 2023<span> @</span></Copyright>
            </Container>
            <BgImgFooter/>
            {/*<BgImgFooterTwo/>*/}
        </StyledFooter>
    )
        ;
};

const StyledFooter = styled.footer`

  @media ${theme.media.mobile1060} {
    & ${FlexWrapper} {
      margin-bottom: 60px;
    }
  }
`;

const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

const SocialItem = styled.li`
`;

export const SocialLink = styled.a`
  cursor: pointer;
  transition: ${theme.animations.transaction};
  
  &:hover svg {
    color: ${theme.iconsColor.hoverTelegramFooter};
    transform: translateY(-5px);
  }
`;

const StyledSmall = styled.small`
  color: ${theme.whiteThemeColors.primaryBg};
  ${font({family: "Inter, sans-serif", weight: "700", Fmin: 12, Fmax: 16})};
  //font-family: Inter, sans-serif;
  //font-size: 17px;
  //font-weight: 700;
  z-index: 1;
  position: relative;
  bottom: -209px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

const Copyright = styled.small`
  color: ${theme.whiteThemeColors.primaryBg};
  ${font({family: "Inter, sans-serif", weight: "400", Fmin: 8, Fmax: 11})};
  //font-family: Inter, sans-serif;
  //font-size: 12px;
  z-index: 1;
  position: relative;
  bottom: -204px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > span {
    ${font({family: "Inter, sans-serif", weight: "700", Fmin: 4, Fmax: 6})};
      
  }
`;

