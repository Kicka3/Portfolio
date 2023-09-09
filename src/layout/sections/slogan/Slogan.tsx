import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper>
                    <SectionTitle>
                            <p>When we will code?</p>
                            <footer>— <cite>Timothy John</cite></footer>
                    </SectionTitle>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
  margin-bottom: 50px;
  border-top: 5px solid #EAF9F9;
  border-bottom: 5px solid #EAF9F9;
  padding: 15px;


  & div {
    background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
    //background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    //border-top: 5px solid #EAF9F9;
    //border-bottom: 5px solid #EAF9F9;
    //padding: 15px;

  }

  ${font({family: "Roboto, sans-serif", weight: "700", Fmin: 10, Fmax: 58})};
  //font-family: Roboto, sans-serif;
  font-style: normal;
  letter-spacing: -1px;
`;

