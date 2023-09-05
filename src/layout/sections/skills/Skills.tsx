import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {Icon} from "../../../components/icon/icon";
import {Container} from "../../../components/Container";

const Skills = () => {
    return (
        <StyledSkill>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"5px"} marginB={"50px"}>
                    <SectionTitle marginT={"70px"}>My Tech Stack</SectionTitle>
                    <CircleIcon/>
                </FlexWrapper>
                <FlexWrapper wrap={"wrap"} gap={"60px"}>
                    <Icon iconId={"css"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"html"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"js"} width={"70px"} height={"70px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"githubFill"} width={"80px"} height={"75px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"react"} width={"70px"} height={"80px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"ts"} width={"60px"} height={"70px"} viewBox={"0 0 120 120"}/>
                    <Icon iconId={"redux"} width={"70px"} height={"70px"} viewBox={"0 0 110 110"}/>
                    <Icon iconId={"Git"} width={"64px"} height={"64px"} viewBox={"0 0 90 90"}/>
                    <Icon iconId={"styledComponents"} width={"64px"} height={"64px"} viewBox={"0 0 120 120"}/>
                </FlexWrapper>
            </Container>
        </StyledSkill>
    );
};

export default Skills;

export const StyledSkill = styled.section`
  margin-bottom: 150px;

`;


