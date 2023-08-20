import React from 'react';
import styled from 'styled-components';
import {MoonStyled} from "../MoonImg/MoonImg";





export const Menu = (props: {menuItems: Array<string>}) => {
    return (

        <StyledMenu>
            <ul>

                {/*{props.menuItems.map((item, index) => {*/}
                {/*    return <li key={index}>*/}
                {/*        <a href="">(item)</a>*/}
                {/*    </li>*/}
                {/*})};*/}


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
