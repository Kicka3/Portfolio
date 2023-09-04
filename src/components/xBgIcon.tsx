import React from 'react';
import styled from "styled-components";
import XIcon from "../assets/images/x.png"
import {theme} from "../styles/Theme";


export const XBgIcon = () => {
    return (
        <StyledXBgIcon>

        </StyledXBgIcon>
    );
};

const StyledXBgIcon = styled.div`
  background-image: url("${XIcon}");
  width: 120px;
  height: 120px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 563px;
  top: 192px;


`;