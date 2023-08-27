import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/Menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";


const items = ["Home", "Projects", "About", "Content",];

export const Header = () => {
    return (
        <Styledheader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </Styledheader>
    );
};


const Styledheader = styled.header`
  background-color: #A6BCFA;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;
