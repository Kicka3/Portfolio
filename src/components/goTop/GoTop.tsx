import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/icon";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const GoTop = () => {

    const [showBtn, setshowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyledGoTop onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrowR"} height={"30px"} width={"30px"} viewBox={"0 0 30 30"}
                          color={theme.whiteThemeColors.goTopBtn}/>
                </StyledGoTop>
            )}
        </>
    );
};

const StyledGoTop = styled.button`
  background-color: transparent;
  transform: rotate(-90deg);
  text-align: center;
  border: none;
  cursor: pointer;
  padding: 8px;
  position: fixed;
  z-index: 999;
  bottom: 280px;
  right: 30px;
  transition: all 0.2s ease 0s;

  &:hover {
    transform: rotate(-90deg) scale(1.2)
  }
`;