import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {Icon} from "../../../components/icon/icon";
import {Container} from "../../../components/Container";
import {Fade} from "react-awesome-reveal";


const Skills = () => {
    return (
        <StyledSkill id={"skills"}>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"5px"} marginB={"50px"}>
                    <Fade cascade={true}
                          damping={0.2}
                          direction={"right"}
                    >
                        <SectionTitle marginT={"70px"}>My Tech Stack</SectionTitle>
                    </Fade>
                    <Fade cascade={true}
                          damping={2}
                          direction={"left"}
                    >
                        <CircleIcon/>
                    </Fade>
                </FlexWrapper>
                <FlexWrapper wrap={"wrap"} gap={"60px"} rowGap={"32px"}>
                    <Fade cascade={true} damping={0.2}>
                        <Icon iconId={"css"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"html"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"js"} width={"120px"} height={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"githubFill"} width={"140px"} height={"130px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"react"} width={"130px"} height={"150px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"ts"} width={"110px"} height={"120px"} viewBox={"0 0 120 120"}/>
                        <Icon iconId={"redux"} width={"120px"} height={"120px"} viewBox={"0 0 110 110"}/>
                        <Icon iconId={"Git"} width={"120px"} height={"120px"} viewBox={"0 0 90 90"}/>
                        <Icon iconId={"styledComponents"} width={"114px"} height={"114px"} viewBox={"0 0 120 120"}/>
                    </Fade>
                </FlexWrapper>
            </Container>
        </StyledSkill>
    );
};

export default Skills;

export const StyledSkill = styled.section`
  margin-bottom: 150px;

`;


