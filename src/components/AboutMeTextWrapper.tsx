import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./FlexWrapper";
import {CircleIcon} from "./svgIcons/icons/CircleIcon";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const AboutMeTextWrapper = () => {
    return (
        <>
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
            </AboutMeTextWrapperStyled>
            <AboutEkb>
                <AboutWrapper>
                    <AboutMeTextTitles><CircleIcon/> Yekaterinburg is the largest city on the land border between Europe and Asia.</AboutMeTextTitles>
                    <AboutMeTextTitles><CircleIcon/> Yekaterinburg is the most compact city with a population of one million in the country.</AboutMeTextTitles>
                    <AboutMeTextTitles><CircleIcon/> The frame for the Statue of Liberty in the USA is made from metal mined in Yekaterinburg.
                        2022</AboutMeTextTitles>
                </AboutWrapper>
            </AboutEkb>

        </>
    );
};

const AboutMeTextWrapperStyled = styled.div`
  max-width: 525px;
  width: 100%;
  height: 346px;
  position: relative;
  z-index: 1;
  top: 72px;
  left: 39px;
  border-radius: 100px 0;
  backdrop-filter: blur(10px);
  background: linear-gradient(132deg, rgba(255, 255, 255, 0.50) 0%, rgba(0, 71, 255, 0.05) 100%);
  box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.05);

  @media ${theme.media.mobile1433} {
    top: 88px;
    left: 186px;
  }


  @media ${theme.media.mobile1207} {
    top: 25px;
    left: 44px;
  }
  
  @media ${theme.media.newTablet830} {
    display: flex;
    align-items: center;
    top: 51px;
    left: 129px;
    height: 280px;
    max-width: 489px;
  }
  
  @media ${theme.media.tablet} {
    top: 51px;
    left: 85px;
  }
  
  @media ${theme.media.newTablet621} {
    top: 78px;
    left: 42px;
  }
  
  @media ${theme.media.mobile} {
    top: 78px;
    left: 42px;
    height: 298px;
    max-width: 446px;
  }
  
  @media ${theme.media.mobile533} {
    top: 70px;
    left: 23px;
  } 
  
  @media ${theme.media.mobile507} {
    height: 300px;
    max-width: 407px;
  }
  
  @media ${theme.media.mobile470} {
    height: 300px;
    max-width: 341px;
    top: 41px;
    left: 43px;
  }
  @media ${theme.media.mobile438} {
    left: 25px;
  }
  
  @media ${theme.media.mobileIphone} {
    left: 13px;
  }
  

`;

const AboutMeTextStyled = styled.h2`
  color: #393939;
  ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 30, Fmax: 40})};
  font-style: normal;
  margin: 74px 51px 22px 59px;
  //font-family: Roboto, sans-serif;
  //font-size: 40px;
  //font-weight: 700;

  & span {
    color: #2157F2;
  }

  @media ${theme.media.newTablet830} {
    margin: 6px 51px 22px 59px;
  }
  
`;

const AboutMeTextTitles = styled.p`
  color: #393939;
  max-width: 513px;
  width: 100%;
  ${font({family: "Roboto , sans-serif", weight: "400", Fmin: 15, Fmax: 20})};
  font-style: normal;
  padding-left: 59px;
  //font-family: Roboto, sans-serif;
  //font-size: 19px;
  //font-weight: 400;
`;

const AboutEkb = styled.div`
  display: none;
  
  @media ${theme.media.newTablet830} {
    display: block;
  }
 
`;

const AboutWrapper = styled.div`
  ${font({family: "Roboto , sans-serif", weight: "400", Fmin: 13, Fmax: 20})};
  height: 208px;
  max-width: 517px;
  width: 100%;
  left: 232px;
  bottom: -218px;
  position: relative;
  border-radius: 0 100px;
  backdrop-filter: blur(10px);
  background: linear-gradient(132deg,rgba(255,255,255,0.50) 0%,rgba(0,71,255,0.05) 100%);
  box-shadow: 0 2px 27px 0 rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  gap: 12px;

  @media ${theme.media.newTablet794} {
    display: none;
  }
 
`;