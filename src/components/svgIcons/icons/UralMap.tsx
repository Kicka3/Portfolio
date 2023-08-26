import React from 'react';
import styled from "styled-components";
import mapUr from "../../../assets/images/mapOrig.png";
import bgImgUral from "../../../assets/images/mapOrig.png"


export const UralMap = () => {
    return (
        <UralMapStyled/>
    );
};


const UralMapStyled = styled.div`
  width: 1280px;
  height: 738px;
  background-image: url("${bgImgUral}");
  position: relative;
  left: -42px;
  top: -5px;
  background-repeat: no-repeat;
`;

{/*<UralMapStyled src={mapUr} alt={""}/>*/
}
