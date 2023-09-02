import React from 'react';
import styled, {css} from 'styled-components';
import {MoonStyled} from "../../../components/MoonImg/MoonImg";
import {theme} from "../../../styles/Theme";


export const MobileHeaderMenu = () => {
    return (
        <StyledHeaderNav>

            <BurgerButton isOpen={true}>
                <span></span>
            </BurgerButton>

            <StyledHeadMenu>
                <MobileMenuPopUp isOpen={true}>
                    <ul>
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
                    </ul>
                </MobileMenuPopUp>

            </StyledHeadMenu>
        </StyledHeaderNav>
    );
};

const StyledHeaderNav = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{isOpen: Boolean}>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 999999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.whiteThemeColors.primaryBg};
    position: absolute;
    left: 40px;
    bottom: 50px;

    //Прозрачность span
    ${props => props.isOpen && css<{ isOpen: Boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.whiteThemeColors.primaryBg};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: Boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.whiteThemeColors.primaryBg};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: Boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`;


const StyledHeadMenu = styled.menu`
  position: relative;
  z-index: 99999;
`;

const MobileMenuPopUp = styled.div<{isOpen: Boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(166, 188, 250, 0.63);
  display: none;

  ${props => props.isOpen && css<{ isOpen: Boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 58px;
    font-size: 16px;
  }
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
    transition: width 0.5s; /* Время эффекта */
  }
`;

// const MoonWrapper = styled.div`
//   transition-property: all;
//   transition: all ease 1s;
// `;

