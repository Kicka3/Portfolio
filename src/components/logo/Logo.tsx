import React from 'react';
import logoImg from "../../assets/images/logo.png";
import styled from "styled-components";

export const Logo = () => {
    return (
        <LinkLogo href="#">
            <LogoImgWrapper/>
        </LinkLogo>
    );
};

const LinkLogo = styled.a`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  
 
`;

const LogoImgWrapper = styled.div`
  background-image: url(${logoImg});
  width: 68px;
  height: 60px;
`;
