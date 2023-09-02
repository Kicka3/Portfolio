import React from 'react';
import styled from 'styled-components';
import {MoonStyled} from "../../../components/MoonImg/MoonImg";
import {theme} from "../../../styles/Theme";
// import {MoonStyled} from "../../../components/MoonImg/MoonImg";


export const HeaderMenu = () => {
    return (

        <StyledHeaderNav>
            <StyledHeadMenu>
                <StyledHeaderUl>

                    <StyledHedLi>
                        <Link href="#">Home</Link>
                    </StyledHedLi>

                    <StyledHedLi>
                        <Link href="#">Projects</Link>
                    </StyledHedLi>

                    <StyledHedLi>
                        <Link href="#">About</Link>
                    </StyledHedLi>

                    <StyledHedLi>
                        <Link href="#">Content</Link>
                    </StyledHedLi>

                    <StyledHedLi>
                        <MoonStyled/>
                    </StyledHedLi>
                </StyledHeaderUl>
            </StyledHeadMenu>
        </StyledHeaderNav>
    );
};

const StyledHeaderNav = styled.nav`

`;

const StyledHeadMenu = styled.menu`
  position: relative;
  z-index: 99999;
`;

const StyledHeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 58px;
  font-size: 16px;
  align-items: center;
`;

const StyledHedLi = styled.li`
 
`;

const Link = styled.a`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.whiteThemeColors.fontOne};
  
  position: relative;
  cursor: pointer;
  
  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 2px; /* Высота линии */
    background-color: ${theme.whiteThemeColors.fontOne}; /* Цвет подчеркивания при исчезании линии*/
    transition: width 0.5s; /* Время эффекта */
  }
  
  &:hover:after {
    content: "";
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -3px;
    height: 2px; /* Высота линии */
    background-color: ${theme.whiteThemeColors.fontOne}; /* Цвет подчеркивания при появлении линии*/
    transition: width 0.5s;  /* Время эффекта */
  }
  
  
`;

