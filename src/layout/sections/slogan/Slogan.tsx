import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>When will we code?</SectionTitle>
            <ButtonSlogan>Contact me</ButtonSlogan>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
  background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-family: DM Sans;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -1px;
`;