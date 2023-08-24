import React from 'react';
import styled from "styled-components";
import mapUr from "../../../assets/images/mapOrig.png";



export const UralMap = () => {
    return (
        <div>
            <UralMapStyled src={mapUr} alt={""}/>
        </div>
    );
};


const UralMapStyled = styled.img`
  width: 881px;
  max-height: 813px;
  object-fit: cover;

`;


