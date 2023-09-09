import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {Link} from "react-scroll";
import {SocialLink} from "../../Footer/NewFooter";
import {Icon} from "../../../components/icon/icon";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const MobileHeaderMenu = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setmenuIsOpen(!menuIsOpen)
    }

    return (
        <StyledHeaderNav>

            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>

            <StyledHeadMenu>
                <MobileMenuPopUp isOpen={menuIsOpen} onClick={() => {
                    setmenuIsOpen(false)
                }}>
                    <FlexWrapper direction={"column"} gap={"40px"}>
                        <MenuItemsUl role={"menu"} aria-label={"Menu"}>
                            <StyledHedLi role={"menuitem"}>
                                <NavLink to={"home"} smooth={true}>Home</NavLink>
                            </StyledHedLi>

                            <StyledHedLi role={"menuitem"}>
                                <NavLink to={"skills"} smooth={true}>Skills</NavLink>
                            </StyledHedLi>

                            <StyledHedLi role={"menuitem"}>
                                <NavLink to={"projects"} smooth={true}>Projects</NavLink>
                            </StyledHedLi>

                            <StyledHedLi role={"menuitem"}>
                                <NavLink to={"about"} smooth={true}>About</NavLink>
                            </StyledHedLi>

                            <StyledHedLi role={"menuitem"}>
                                <NavLink to={"contact"} smooth={true}>Content</NavLink>
                            </StyledHedLi>

                            {/*<StyledHedLi>*/}
                            {/*    <MoonStyled/>*/}
                            {/*</StyledHedLi>*/}
                        </MenuItemsUl>

                        <IconsMobileMenuUl>
                            <FlexWrapper direction={"row"} gap={"30px"}>
                                <IconListLi>
                                    <SocialLink>
                                        <Icon iconId={"Git"} height={"40px"} width={"40px"} viewBox={"0 0 90 90"}/>
                                    </SocialLink>
                                </IconListLi>

                                <IconListLi>
                                    <SocialLink>
                                        <Icon iconId={"Git"} height={"40px"} width={"40px"} viewBox={"0 0 90 90"}/>
                                    </SocialLink>
                                </IconListLi>
                            </FlexWrapper>
                        </IconsMobileMenuUl>

                    </FlexWrapper>
                </MobileMenuPopUp>

            </StyledHeadMenu>
        </StyledHeaderNav>
    );
};

const StyledHeaderNav = styled.nav`
  display: none;

  @media ${theme.media.newTablet895} {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: Boolean }>`
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
    background-color: ${theme.whiteThemeColors.accent};
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
      background-color: ${theme.whiteThemeColors.accent};
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
      background-color: ${theme.whiteThemeColors.accent};
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

const MobileMenuPopUp = styled.div<{ isOpen: Boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  background-color: rgba(166, 188, 250, 92%);
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
    ${font({Fmax: 10, Fmin: 16})};
    //font-size: 16px;
  }
`;

const MenuItemsUl = styled.ul`

`;

const StyledHedLi = styled.li`

`;

const NavLink = styled(Link)`
  ${font({family: "Roboto , sans-serif", weight: "400", Fmin: 10, Fmax: 16})};
  //font-family: Roboto, sans-serif;
  //font-size: 16px;
  //font-weight: 400;
  color: ${theme.whiteThemeColors.fontOne};
  position: relative;
  cursor: pointer;

  @media ${theme.media.newTablet895} {
    font-size: 50px;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    bottom: -3px;
    width: 0;
    height: 2px; /* Высота линии */
    background-color: ${theme.whiteThemeColors.fontOne}; /* Цвет подчеркивания при исчезании линии*/
    transition: width 0.2s; /* Время эффекта */
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
    transition: width 0.2s; /* Время эффекта */
  }
`;


const IconsMobileMenuUl = styled.ul`

`;

const IconListLi = styled.li`

`;