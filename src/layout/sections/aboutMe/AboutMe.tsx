import React from 'react';
import styled from "styled-components";
import {AboutMeTextWrapper} from "../../../components/AboutMeTextWrapper";
import bgImgUral from "../../../assets/images/mapOrig.png"
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {BgAboutMeChel} from "../../../components/backGrounds/BgAboutMeChel";



export const AboutMe = () => {
    return (
        <AboutMeStyled id={"about"}>
            <Container>
                <BgColorWrap>
                    <AboutMeTextWrapper/>
                </BgColorWrap>
                <BgAboutMeChel/>
            </Container>
        </AboutMeStyled>
    );
};

const BgColorWrap = styled.div`
  height: 738px;
  position: relative;
`;

const AboutMeStyled = styled.section`
  background-color: ${theme.whiteThemeColors.aboutColor};
  max-height: 946px;
  margin-bottom: 47px;
  overflow: hidden;

  background-image: url("${bgImgUral}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  position: relative;
  width: 100%;
  height: 738px;

`;

