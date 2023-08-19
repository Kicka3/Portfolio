import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Subtitle} from "../../../components/Subtitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Menu} from "../../../components/Menu/Menu";



const worksItems = ["All", "Landing page", "react", "SPA",];

export const Works = () => {
    return (
        <StyledWorks>
            <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"0px"}>
                <SectionTitle marginB={"49px"} color={"#42446E"} size={"48px"}>Projects</SectionTitle>
                <Subtitle color={"#666"} lineH={"26px"} size={"32px"}>Things I’ve built so far</Subtitle>
            </FlexWrapper>
            {/*<Menu menuItems={worksItems}/>  //переиспользуемая функция menu*/}
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: rgba(0, 255, 255, 0.18);
`;

