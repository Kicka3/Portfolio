import React from 'react';
import styled from 'styled-components';
import {MoonStyled} from "../../../components/MoonImg/MoonImg";
// import {MoonStyled} from "../../../components/MoonImg/MoonImg";


export const HeaderMenu = () => {
    return (

        <StyledHeaderNav>
            <menu>
                <StyledHeaderUl>
                    <li>
                        <Link href="">Home</Link>
                    </li>

                    <li>
                        <Link href="">Projects</Link>
                    </li>

                    <li>
                        <Link href="">About</Link>
                    </li>

                    <li>
                        <Link href="">Content</Link>
                    </li>

                    <li>
                        <MoonStyled/>
                    </li>
                </StyledHeaderUl>
            </menu>
        </StyledHeaderNav>
    );
};

const StyledHeaderNav = styled.nav`

`;

const StyledHeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 58px;
  font-size: 16px;
  align-items: center;
`;


const Link = styled.a`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #393939;
`;

