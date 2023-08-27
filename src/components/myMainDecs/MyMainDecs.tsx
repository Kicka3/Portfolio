import React from 'react';
import {Name} from "../NameWrapper";
import styled from "styled-components";
import {Button} from "../Button";
import {Icon} from "../icon/icon";
import {FlexWrapper} from "../FlexWrapper";

export const MyMainDecs = () => {
    return (
        <StyledMainDecs>
                <h2>I’m <Name color={"#2157F2"}> Kirill </Name>Ozornin</h2>
                <h1>A Web Developer</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, quam?</span>

                <Button padding={"1px 5px"} fSize={"15px"} color={"#FFF"} background={"#2157F2"}
                        borderRadius={"20px"} width={"200px"} height={"54px"}>
                        <div>See Projects</div>
                        <span><Icon iconId={"arrowR"} width={"28px"} height={"28px"}
                                    viewBox="0 0 28 28"/></span>
                </Button>
                <Button color={"#6C92FF"} fSize={"15px"}>
                    <>Download Resume</>
                </Button>
        </StyledMainDecs>
    );
};

const StyledMainDecs = styled.div`
  
`;