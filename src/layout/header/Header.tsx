import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {BgLeftPicture} from "../../components/backGrounds/bgLeftPicture";
import {XBgIcon} from "../../components/backGrounds/xBgIcon";



// const items = ["Home", "Projects", "About", "Content",];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu/>
                </FlexWrapper>
                </Container>

                <BgLeftPicture/>
                <XBgIcon/>

        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background-color: #FFF;
  padding: 15px 0;
`;
