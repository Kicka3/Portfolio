import React from 'react';
import styled from 'styled-components';
import {MoonStyled} from "../../../components/MoonImg/MoonImg";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {Link} from 'react-scroll';


export const HeaderMenu = () => {
    return (

        <StyledHeaderNav>
            <StyledHeadMenu>
                <StyledHeaderUl>

                    <StyledHedLi>
                        <NavLink
                            to={"home"}
                            smooth={true}
                            activeClass="active"
                            spy={true}>Home</NavLink>
                    </StyledHedLi>

                    <StyledHedLi>
                        <NavLink to={"skills"} smooth={true}>Skills</NavLink>
                    </StyledHedLi>

                    <StyledHedLi>
                        <NavLink to={"projects"} smooth={true}>Projects</NavLink>
                    </StyledHedLi>

                    <StyledHedLi>
                        <NavLink to={"about"} smooth={true}>About</NavLink>
                    </StyledHedLi>

                    <StyledHedLi>
                        <NavLink to={"contact"} smooth={true}>Contacts</NavLink>
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

  @media ${theme.media.newTablet895} {
    display: none;
  }


`;

const StyledHeadMenu = styled.menu`
  position: relative;
  z-index: 99999;
`;

const StyledHeaderUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 58px;
  ${font({family: "Roboto , sans-serif", weight: "700", Fmin: 10, Fmax: 16})};
  //font-size: 16px;
  align-items: center;
  @media ${theme.media.mobile1000} {
    gap: 43px;
  }

  @media ${theme.media.mobile948} {
    gap: 32px;

  }
`;

const StyledHedLi = styled.li`

`;

const NavLink = styled(Link)`
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

  &:hover:after, & .active {
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
//
// const MoonWrapper = styled.div`
//   transition-property: all;
//   transition: all ease 1s;
// `;

