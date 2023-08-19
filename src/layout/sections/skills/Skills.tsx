import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {CssIcon} from "../../../components/svgIcons/skillIcons/CssIcon";
import GitHubIcon from "../../../components/svgIcons/skillIcons/GitHubIcon";
import HtmlIcon from "../../../components/svgIcons/skillIcons/HtmlIcon";
import JsIcon from "../../../components/svgIcons/skillIcons/JsIcon";
import ReactIcon from "../../../components/svgIcons/skillIcons/ReactIcon";
import ReduxIcon from "../../../components/svgIcons/skillIcons/ReduxIcon";
import StyledComIcon from "../../../components/svgIcons/skillIcons/StyledComIcon";
import TsIcon from "../../../components/svgIcons/skillIcons/TsIcon";

const Skills = () => {
    return (
        <StyledSkill>
            <SectionTitle>My Tech Stack</SectionTitle>
            <FlexWrapper wrap={"wrap"}>
                <CssIcon />
                <HtmlIcon/>
                <GitHubIcon/>
                <JsIcon/>
                <ReactIcon/>
                <TsIcon/>
                <ReduxIcon/>
                <StyledComIcon/>

            </FlexWrapper>
        </StyledSkill>
    );
};

export default Skills;

export const StyledSkill = styled.section`
  margin-bottom: 214px;
    
`;


