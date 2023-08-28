import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Subtitle} from "../../../components/Subtitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import reactangle1 from "../../../assets/images/Rectangle1.png";
import reactangle2 from "../../../assets/images/Rectangle2.png";
import reactangle3 from "../../../assets/images/Rectangle3.png";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {Container} from "../../../components/Container";
import {BgDotsWork} from "../../../components/BgDotsWork";


// const worksItems = ["All", "Landing page", "react", "SPA",];

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
            <BgDotsWork/>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"0px"}>
                    <SectionTitle marginB={"49px"} color={"#42446E"} size={"48px"}>Projects</SectionTitle>
                    <CircleIcon/>
                    <Subtitle color={"#666"} lineH={"26px"} size={"32px"}>Things I’ve built so far</Subtitle>

                    <FlexWrapper gap={"34px"}>
                        <Work src={reactangle1} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <Work src={reactangle2} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        <Work src={reactangle3} title={"Project Tile goes here"}
                              text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  //min-height: 100vh;
  margin-bottom: 152px;
  z-index: 9999;
`;

