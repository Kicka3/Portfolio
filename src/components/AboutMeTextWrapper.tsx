import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {CircleIcon} from "./svgIcons/icons/CircleIcon";
import {BgAboutMeChel} from "./backGrounds/BgAboutMeChel";

export const AboutMeTextWrapper = () => {
    return (
        <AboutMeTextWrapperStyled>
            <FlexWrapper direction={"row"} gap={"0px"} align={"center"} wrap={"wrap"} justify={"flex-start"}>
                <AboutMeTextStyled>I'm <span>Kirill</span> Ozornin</AboutMeTextStyled>

                <FlexWrapper wrap={"wrap"} direction={"column"} align={"start"} justify={"start"} gap={"26px"}>
                    <AboutMeTextTitles><CircleIcon/> I was born in Ekaterinburg</AboutMeTextTitles>
                    <AboutMeTextTitles><CircleIcon/> I’m 25 years old</AboutMeTextTitles>
                    <AboutMeTextTitles><CircleIcon/> I have started my interest in this field from
                        2022</AboutMeTextTitles>
                </FlexWrapper>

            </FlexWrapper>
            <BgAboutMeChel/>
        </AboutMeTextWrapperStyled>
    );
};

const AboutMeTextWrapperStyled = styled.div`
  width: 496px;
  height: 346px;
  position: relative;
  z-index: 1;
  top: 72px;
  left: 39px;
  border-radius: 100px 0;
  backdrop-filter: blur(10px);
  background-image: url("../assets/images/Chel.png");
  //background: linear-gradient(132deg, rgba(255, 255, 255, 0.50) 0%, rgba(0, 71, 255, 0.05) 100%);
  background: #A6BCFA;
  box-shadow: 0px 2px 27px 0px rgba(0, 0, 0, 0.05);
`;

const AboutMeTextStyled = styled.h2`
  color: #393939;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  //text-align: center;
  //padding-left: 59px;
  //padding-top: 10px;
  //padding-right: 71px;
  margin: 74px 51px 22px 59px;

  & span {
    color: #2157F2;
  }
`;

const AboutMeTextTitles = styled.p`
  color: #393939;
  max-width: 463px;
  font-family: Roboto, sans-serif;
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  padding-left: 59px;
`;