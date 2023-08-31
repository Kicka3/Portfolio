import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Slogan = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper>
                    <SectionTitle>
                        {/*<blockquote>*/}
                            <p>Fashion is not...</p>
                            <footer>— <cite>Coco Chanel</cite></footer>
                        {/*</blockquote>*/}
                    </SectionTitle>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};


const StyledSlogan = styled.section`
  margin-bottom: 50px;

  & div {
    background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    border-top: 5px solid #EAF9F9;
    border-bottom: 5px solid #EAF9F9;
    //color: #020202;
    padding: 30px 30px 30px 30px;
    //position: relative;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }
  
  font-family: Roboto, sans-serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -1px;
`;

