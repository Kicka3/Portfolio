import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/icon";
import {animateScroll as scroll} from "react-scroll";


export const Logo = () => {
    return (
        <LinkLogo onClick={() => {scroll.scrollToTop()}}>
            <Icon color={"#FFF"} iconId={"headLogo"} height={"60px"} width={"60px"} viewBox={"0 0 60 60"}/>
            {/*<LogoImgWrapper/>*/}
        </LinkLogo>
    );
};

const LinkLogo = styled.a`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  position: relative;
  z-index: 999999;
  transition: .5s;
  
  &:hover {
    transform: scale(1.1);
    //transition: .5s;
  }
`;

// const LogoImgWrapper = styled.div`
//   background-image: url(${logoImg});
//   width: 68px;
//   height: 60px;
// `;
