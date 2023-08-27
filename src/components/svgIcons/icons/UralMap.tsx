import React from 'react';
import styled from "styled-components";
import bgImgUral from "../../../assets/images/mapOrig.png"


export const UralMap = () => {
    return (
        <UralMapStyled/>
    );
};


const UralMapStyled = styled.div`
  background-image: url("${bgImgUral}");
`;

