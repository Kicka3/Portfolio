import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Subtitle} from "../../../components/Subtitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {Container} from "../../../components/Container";
import {BgDotsWork} from "../../../components/backGrounds/BgDotsWork";
import {BgXWork} from "../../../components/backGrounds/BgXWork";

import {Fade} from "react-awesome-reveal";


import work1 from "../../../assets/images/Work1.png";
import work2 from "../../../assets/images/Work2.png";
import work3 from "../../../assets/images/Work3.png";
import work4 from "../../../assets/images/Work4.png";
import work5 from "../../../assets/images/Work4.png";
import work6 from "../../../assets/images/Work1.png";
import work7 from "../../../assets/images/Work2.png";
import work8 from "../../../assets/images/Work3.png";


// const worksItems = ["All", "Landing page", "react", "SPA",];

export const Works = () => {
    return (
        <StyledWorks id={"projects"}>
            <Container>
                <BgDotsWork/>
                <FlexWrapper wrap={"wrap"} justify={"center"} align={"center"} direction={"column"} gap={"0px"}>
                    <Fade cascade={true}
                          damping={0.2}
                          direction={"left"}
                    >
                        <SectionTitle size={"48px"}>Projects</SectionTitle>
                    </Fade>
                    <Fade cascade={true}
                          damping={2}
                          direction={"right"}
                    >
                        <CircleIcon/>
                    </Fade>
                    <Fade cascade={true}
                          damping={2}
                          direction={"right"}
                    >
                        <Subtitle lineH={"26px"} size={"32px"}>Things I’ve built so far</Subtitle>
                    </Fade>
                    <BgXWork/>

                    <FlexWrapper gap={"34px"} wrap={"wrap"}>
                        <Fade cascade={true}
                              damping={0.2}
                              direction={"right"}
                        >
                            <Work src={work1} title={"Project Tile goes here"}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                            <Work src={work2} title={"Project Tile goes here"}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                            <Work src={work3} title={"Project Tile goes here"}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                            <Work src={work4} title={"Project Tile goes here"}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                            <Work src={work5} title={"Project Tile goes here"}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                            <Work src={work6} title={"Project Tile goes here"}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                            <Work src={work7} title={"Project Tile goes here"}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                            <Work src={work8} title={"Project Tile goes here"}
                                  text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                        </Fade>
                    </FlexWrapper>

                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  margin-bottom: 152px;
`;

