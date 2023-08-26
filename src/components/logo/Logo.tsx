import React from 'react';
import logoImg from "../../assets/images/logo.png";
import styled from "styled-components";

export const Logo = () => {
    return (
        <a href="#">
            <LogoImgWrapper/>
        </a>
    );
};

const LogoImgWrapper = styled.div`
  background-image: url(${logoImg});
  width: 79px;
  height: 79px;
`;
