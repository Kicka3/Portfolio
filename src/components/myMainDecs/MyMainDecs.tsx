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
                <div>
                    <FlexWrapper gap={"32px"}>
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
                    </FlexWrapper>
                </div>
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
  }

  & h1 {
    //font-size: 40px;
    ${font({family: "Roboto , sans-serif",weight: "700", Fmin: 25, Fmax: 40})};
    margin-bottom: 17px;
  }
  
  & > span {
    width: 376px;
    ${font({family: "Roboto , sans-serif",weight: "400", Fmin: 10, Fmax: 20})};
  }

  @media ${theme.media.mobile1347} {
    margin-left: 20px;
  }
  
`;