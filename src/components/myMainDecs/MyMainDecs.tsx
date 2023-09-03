import React from 'react';
import {Name} from "../NameWrapper";
import styled from "styled-components";
import {Button} from "../Button";
import {Icon} from "../icon/icon";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const MyMainDecs = () => {
    return (
        <StyledMainDecs>
            <h2>I’m <Name color={"#2157F2"}> Kirill </Name>Ozornin</h2>
            <h1>A Web Developer</h1>
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
                            {/*<span><Icon iconId={"arrowRed"} width={"28px"} height={"28px"}*/}
                            {/*            viewBox="0 0 28 28"/></span>*/}
                        </Button>
                    </FlexWrapperButtons>
                </FlexWrapperButtons>
            </FlexWrapper>
        </StyledMainDecs>
    );
};

const StyledMainDecs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  margin-left: 76px;
  font-family: Roboto, sans-serif;

  & h2 {
    margin-bottom: 10px;
    ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 25, Fmax: 55})};
    // font-size: 55px;

    @media ${theme.media.tablet} {
        margin-right: 0;
    }
  }

  & h1 {
    //font-size: 40px;
    ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 25, Fmax: 40})};
    margin-bottom: 17px;

  }

  & > span {
    width: 376px;
    ${font({family: "Roboto , sans-serif", weight: "400", Fmin: 10, Fmax: 20})};


    @media ${theme.media.tablet} {
      display: none;
    }

  }

  @media ${theme.media.newTablet910} {
    margin-left: -35px;
  }

  @media ${theme.media.newTablet850} {
    margin-left: -27px;
  }

  @media ${theme.media.newTablet830} {
    margin-left: -2px;
  }

  @media ${theme.media.newTablet887} {
    margin-left: -2px;
  }

  @media ${theme.media.newTablet808} {
    margin-left: 27px;
  }

  @media ${theme.media.tablet} {
    margin-left: 21px;
  }

`;


  const FlexWrapperButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    //flex-wrap: wrap;
    gap: 32px;
    
    
    @media ${theme.media.newTablet910} {
      gap: 12px;
      position: absolute;
      left: 41px;
    }
    
    @media ${theme.media.newTablet850} {
      left: 26px;
    }
    
    @media ${theme.media.newTablet850} {
      left: 29px;
    }
    
    @media ${theme.media.tablet} {
      left: 48px;
      flex-wrap: wrap;
    }
    
    
  `;
