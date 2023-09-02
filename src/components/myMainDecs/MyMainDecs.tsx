import React from 'react';
import {Name} from "../NameWrapper";
import styled from "styled-components";
import {Button} from "../Button";
import {Icon} from "../icon/icon";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "../../styles/Theme";

export const MyMainDecs = () => {
    return (
        <StyledMainDecs>
            <h2>I’m <Name color={"#2157F2"}> Kirill </Name>Ozornin</h2>
            <h1>A Web Developer</h1>
            <span style={{width: '376px'}}>
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
    font-size: 55px;
  }

  & h1 {
    margin-bottom: 17px;
    font-size: 40px;
  }

`;