import React from 'react';
import styled from "styled-components";
import mapUr from "../../../assets/images/mapOrig.png";
import {AboutMeTextWrapper} from "../../AboutMeTextWrapper";


export const UralMap = () => {
    return (
        <div>
            <div>
                <UralMapStyled src={mapUr}/>
            </div>
            <AboutMeTextWrapper/>
        </div>
    );
};


const UralMapStyled = styled.img`
  width: 881px;
  max-height: 813px;
  object-fit: cover;

`;


