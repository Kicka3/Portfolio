import React from 'react';
import {Name} from "../NameWrapper";
import styled from "styled-components";
import {Button} from "../Button";
import {Icon} from "../icon/icon";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";
import {MobileButton} from "../MobileButton";
import Typewriter from 'typewriter-effect';


export const MyMainDecs = () => {
    return (
        <StyledMainDecs>
            <MainDescTitle>I’m <Name color={"#2157F2"}> Kirill </Name>Ozornin</MainDescTitle>
            <MainDescProf>
                <p>A Web Developer</p>
                <p>Front-end developer</p>
                <Typewriter
                    options={{
                        strings: ['A Developer', 'A Web Developer.'],
                        autoStart: true,
                        loop: true,

                    }}
                />
            </MainDescProf>
            <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ea.
            </span>
            <FlexWrapper justify={"flex-start"} align={"center"} gap={"30px"}>
                <FlexWrapperButtons>
                    <FlexWrapperButtons>
                        <FlexWrapper>
                            <Button marginT={"42px"} padding={"1px 5px"} fSize={"15px"} color={"#FFF"}
                                    background={"#2157F2"}
                                    borderRadius={"20px"} width={"200px"} height={"54px"}>
                                <div>See Projects</div>
                                <span><Icon iconId={"arrowR"} width={"28px"} height={"28px"}
                                            viewBox="0 0 28 28"/></span>
                            </Button>
                        </FlexWrapper>

                        <Button activeColor={theme.whiteThemeColors.primaryBg} marginT={"42px"} color={"#6C92FF"}
                                fSize={"15px"}
                                borderRadius={"20px"} width={"200px"} height={"54px"}>
                            <div>Download Resume</div>
                        </Button>

                        <MobileButtonsWrapper>
                            <MobileButton color={"#FFF"}
                                          background={"#2157F2"}
                                          borderRadius={"20px"}>
                                <div>See projects</div>
                            </MobileButton>
                            <MobileButton color={"#6C92FF"}
                                          borderRadius={"20px"}>
                                <div>Dowload</div>
                            </MobileButton>
                        </MobileButtonsWrapper>

                    </FlexWrapperButtons>

                </FlexWrapperButtons>
            </FlexWrapper>
        </StyledMainDecs>
    );
};

const MainDescTitle = styled.h2`
  margin-top: 0;
  margin-right: 2px;
  ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 20, Fmax: 55})};
`;

const MainDescProf = styled.h1`
  //font-size: 40px;
  ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 17, Fmax: 40})};
  margin-bottom: 17px;
  
  p {
    display: none;
  }
`;

const StyledMainDecs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  margin-left: 76px;
  font-family: Roboto, sans-serif;

  // & > h2 {
  //   margin-top: 0;
  //   margin-right: 2px;
    //   ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 20, Fmax: 55})};
  //
  // }

  // & > h1 {
  //   //font-size: 40px;
    //   ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 17, Fmax: 40})};
  //   margin-bottom: 17px;
  // }

  & > span {
    width: 376px;
    ${font({family: "Roboto , sans-serif", weight: "400", Fmin: 10, Fmax: 20})};

    @media ${theme.media.tablet} {
      width: 313px;
    }

    @media ${theme.media.mobile507} {
      width: 250px;
    }

    @media ${theme.media.mobileIphone} {
      width: 200px;
    }

  }


  @media ${theme.media.mobile1300} {
    margin-left: 35px;
  }

  @media ${theme.media.newTablet910} {
    margin-left: 62px;
  }

  @media ${theme.media.newTablet850} {
    margin-left: 48px;
  }

  @media ${theme.media.mobile507} {
    margin-left: 30px;
  }

  @media ${theme.media.mobile435} {
    margin-left: 17px;
  }

  @media ${theme.media.mobileIphone} {
    margin-left: 37px;
  }

  @media ${theme.media.mobileIphone360} {
    margin-left: 39px;
  }

`;


const FlexWrapperButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 32px;


  @media ${theme.media.mobile1333} {
    gap: 12px;
    position: relative;
    left: -2px;
  }

  @media ${theme.media.mobile1300} {
    left: -17px;
  }

  @media ${theme.media.mobile1110} {
    left: -3px;
  }

`;

const MobileButtonsWrapper = styled.div`
  display: flex;
  gap: 5px;
  position: relative;
  left: -7px;
`;
