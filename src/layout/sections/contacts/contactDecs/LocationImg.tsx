import React from 'react';
import styled from "styled-components";
import locImg from "../../../../assets/images/location.png";

export const LocationImg = () => {
    return (
        <StyledLocationImg/>
    );
};

const StyledLocationImg = styled.div`
  background-image: url("${locImg}");
  //background-image: url("${locImg}");
  width: 38px;
  height: 38px;
  background-repeat: no-repeat;
  
`;