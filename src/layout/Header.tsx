import React from 'react';
import styled from "styled-components";
import {Logo} from "../components/logo/Logo";
import {Menu} from "../components/Menu/Menu";


export const Header = () => {
    return (
        <Styledheader>
            <Logo/>
            <Menu/>
        </Styledheader>
    );
};


const Styledheader = styled.header`
  background-color: #A6BCFA;
  display: flex;
  justify-content: space-between;
`;
