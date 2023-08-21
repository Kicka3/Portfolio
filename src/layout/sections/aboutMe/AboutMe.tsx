import React from 'react';
import styled from "styled-components";
import {UralMap} from "../../../components/svgIcons/icons/UralMap";
import {AboutMeTextWrapper} from "../../../components/AboutMeTextWrapper";

export const AboutMe = () => {
    return (
        <AboutMeStyled>
            <UralMap/>
            <AboutMeTextWrapper/>
        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(33, 87, 242, 0.27);
  width: 1633px;
  max-height: 946px;
  margin-bottom: 47px;
`;

