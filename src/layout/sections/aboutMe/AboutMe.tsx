import React from 'react';
import styled from "styled-components";
import {UralMap} from "../../../components/svgIcons/icons/UralMap";

export const AboutMe = () => {
    return (
        <AboutMeStyled>
            <UralMap/>
        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
  background-color: rgba(33, 87, 242, 0.27);
  max-width: 1634px;
  max-height: 946px;
 
`;

