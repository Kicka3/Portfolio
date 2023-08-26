import React from 'react';
import styled from 'styled-components';
import {MoonStyled} from "../MoonImg/MoonImg";


export const Menu = (props: { menuItems: Array<string> }) => {
    return (

        <StyledMenu>
            <menu>
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
            </menu>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
 menu > ul {
    display: flex;
    gap: 30px;
    list-style: none;
    font-size: 16px;
    
    & a{
      color: #393939;
      font-family: Roboto;

      :visited {
        text-decoration: none;
      }
    }
  }
`;
