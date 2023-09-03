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
                {/*<IconsWrapp>*/}
                {/*<Icon color={"#013bd7"} iconId={"arrowR"} width={"20px"} height={"20px"}*/}
                {/*      viewBox={"0 0 50 50"}/>*/}
                {/*<Icon color={"#013bd7"} iconId={"downloadMain"} width={"40px"} height={"40px"}*/}
                {/*      viewBox={"0 0 20 20"}/>*/}
                {/*</IconsWrapp>*/}
            </FlexWrapper>
        </StyledMainDecs>
    );
};

// const IconsWrapp = styled.svg`
//   cursor: pointer;
//   display: none;
//   //display: block;
//   @media ${theme.media.mobile502} {
//     display: block;
//     //display: none;
//   }
// `;

const StyledMainDecs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  margin-left: 76px;
  font-family: Roboto, sans-serif;

  & h2 {
    margin-bottom: 10px;
    ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 20, Fmax: 55})};
    // font-size: 55px;

    @media ${theme.media.tablet} {
      margin-top: 39px;
    }
    
  }

  & h1 {
    //font-size: 40px;
    ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 17, Fmax: 40})};
    margin-bottom: 17px;

  }

  & > span {
    width: 376px;
    ${font({family: "Roboto , sans-serif", weight: "400", Fmin: 10, Fmax: 20})};


    // @media ${theme.media.tablet} {
    //   display: none;
    // }

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
    left: 58px;
  }

  @media ${theme.media.newTablet730} {
    left: 52px;
  }

  @media ${theme.media.newTablet699} {
    left: 40px;
  }

  @media ${theme.media.newTablet646} {
    left: 29px;
  }

  @media ${theme.media.newTablet610} {
    left: 18px;
  }

  @media ${theme.media.newTablet586} {
    flex-wrap: wrap;
    left: 62px;
    gap: 0;
  }

  @media ${theme.media.newMobile543} {
    left: 45px;
  }

  @media ${theme.media.mobile502} {
    left: 76px;
  }

  @media ${theme.media.mobile481} {
    left: 75px;
  }

  @media ${theme.media.mobile444} {
    left: 68px;
    
    & ${FlexWrapper} {
      font-size: 10px;
      width: 137px;
    }
    
    &:last-child{
      font-size: 10px;
      width: 137px;
    }
  }
  
  @media ${theme.media.mobile493} {
    left: 57px;
`;
