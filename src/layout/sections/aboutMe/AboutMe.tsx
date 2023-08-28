import React from 'react';
import styled from "styled-components";
// import {UralMap} from "../../../components/svgIcons/icons/UralMap";
import {AboutMeTextWrapper} from "../../../components/AboutMeTextWrapper";
import bgImgUral from "../../../assets/images/mapOrig.png"
import {Container} from "../../../components/Container";


export const AboutMe = () => {
    return (
        <AboutMeStyled>
            <Container>
                <AboutMeTextWrapper/>
            </Container>
        </AboutMeStyled>
    );
};

const AboutMeStyled = styled.section`
  background-color: rgba(33, 87, 242, 0.27);
  max-height: 946px;
  margin-bottom: 47px;
  overflow: hidden;

  background-image: url("${bgImgUral}");
  background-repeat: no-repeat;

  position: relative;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 738px;

`;

