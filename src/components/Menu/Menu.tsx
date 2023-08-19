import React from 'react';
import styled from 'styled-components';
import {MoonStyled} from "../MoonImg/MoonImg";





export const Menu = () => {
    return (

        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Content</a>
                </li>
                <li>
                    <MoonStyled/>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    list-style: none;
  }
`;
