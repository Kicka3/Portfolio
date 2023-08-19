import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./Skill/Skill";

const Skills = () => {
    return (
        <StyledSkill>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper>
                <Skill iconId={"html"}/>
                <Skill iconId={"css"}/>
                <Skill iconId={"css"}/>
                <Skill iconId={"Git"}/>
                <Skill iconId={"js"}/>
                <Skill iconId={"ts"}/>
                <Skill iconId={"react"}/>
                <Skill iconId={"redux"}/>
                <Skill iconId={"sass"}/>
                <Skill iconId={"styledComponent"}/>
            </FlexWrapper>
        </StyledSkill>
    );
};

export default Skills;

export const StyledSkill = styled.section`


`;


