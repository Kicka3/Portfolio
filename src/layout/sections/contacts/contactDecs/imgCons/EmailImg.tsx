import React from 'react';
import emailImg from "../../../../../assets/images/email.png";
import styled from "styled-components";

export const EmailImg = () => {
    return (
        <StyledEmailImg/>
    );
};

const StyledEmailImg = styled.div`
  background-image: url("${emailImg}");
  width: 38px;
  height: 38px;
  background-repeat: no-repeat;
`;
