import React from 'react';
import styled from "styled-components";
import XIcon from "../assets/images/x.png"


export const XBgIcon = () => {
    return (
        <StyledXBgIcon>

        </StyledXBgIcon>
    );
};

const StyledXBgIcon = styled.div`
  background-image: url("${XIcon}");
  width: 88px;
  height: 88px;
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  left: 549px;
  top: 216px;
`;