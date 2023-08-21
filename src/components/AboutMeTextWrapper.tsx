import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {CircleIcon} from "./svgIcons/icons/CircleIcon";

export const AboutMeTextWrapper = () => {
    return (
        <AboutMeTextWrapperStyled>
            <FlexWrapper direction={"column"} gap={"0px"} align={"flex-start"} wrap={"wrap"} justify={"flex-start"}>
                <AboutMeTextStyled>I'm <span>Kirill</span> Ozornin</AboutMeTextStyled>
                <AboutMeTextTitles><CircleIcon/>I was born in Ekaterinburg</AboutMeTextTitles>
                <AboutMeTextTitles><CircleIcon/>I’m 25 years old</AboutMeTextTitles>
                <AboutMeTextTitles><CircleIcon/>I have started my interest in this field from 2022</AboutMeTextTitles>
            </FlexWrapper>
        </AboutMeTextWrapperStyled>
    );
};

const AboutMeTextWrapperStyled = styled.div`
  width: 563px;
  height: 491px;

  border-radius: 100px 0px;
  background: linear-gradient(132deg, rgba(255, 255, 255, 0.50) 0%, rgba(0, 71, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  
`;

const AboutMeTextStyled = styled.h2`
  color: #393939;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 136%;

  text-align: center;
  padding-left: 59px;
  padding-top: 34px;
  padding-right: 71px;

  & span {
    color: #2157F2;
  }
`;

const AboutMeTextTitles = styled.p`
  color: #393939;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  padding-left: 59px;
`;