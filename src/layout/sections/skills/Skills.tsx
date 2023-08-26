import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {Icon} from "../../../components/icon/icon";

const Skills = () => {
    return (
        <StyledSkill>
            <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"5px"} marginB={"50px"}>
                <SectionTitle color={"#6C92FF"}>My Tech Stack</SectionTitle>
                <CircleIcon/>
            </FlexWrapper>
            <FlexWrapper wrap={"wrap"}>
                <Icon iconId={"css"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                <Icon iconId={"html"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                <Icon iconId={"js"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                <Icon iconId={"githubFill"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                <Icon iconId={"react"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                <Icon iconId={"ts"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                <Icon iconId={"redux"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                <Icon iconId={"Git"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
            </FlexWrapper>
        </StyledSkill>
    );
};

export default Skills;

export const StyledSkill = styled.section`
  margin-bottom: 80px;

`;


