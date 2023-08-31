import React from 'react';
import styled from "styled-components";
import phoneImg from "../../../../../assets/images/telephone.png";

export const PhoneImg = () => {
    return (
        <StyledPhoneImg/>
    );
};

const StyledPhoneImg = styled.div`
  background-image: url("${phoneImg}");
  width: 38px;
  height: 38px;
  background-repeat: no-repeat;
`;