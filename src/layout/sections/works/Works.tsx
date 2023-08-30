import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Subtitle} from "../../../components/Subtitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import work1 from "../../../assets/images/Work1.png";
import work2 from "../../../assets/images/Work2.png";
import work3 from "../../../assets/images/Work3.png";
import work4 from "../../../assets/images/Work4.png";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {Container} from "../../../components/Container";
import {BgDotsWork} from "../../../components/BgDotsWork";
import {BgXWork} from "../../../components/BgXWork";


// const worksItems = ["All", "Landing page", "react", "SPA",];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <BgDotsWork/>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"0px"}>
                    <SectionTitle color={"#42446E"} size={"48px"}>Projects</SectionTitle>
                    <CircleIcon/>
                    <Subtitle color={"#666"} lineH={"26px"} size={"32px"}>Things I’ve built so far</Subtitle>
                    <BgXWork/>

                    <FlexWrapper gap={"34px"} wrap={"wrap"}>
                        <Work src={work1} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <Work src={work2} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <Work src={work3} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <Work src={work4} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/> <Work src={work1} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <Work src={work2} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <Work src={work3} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <Work src={work4} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  margin-bottom: 152px;
`;

