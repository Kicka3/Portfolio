import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonSend} from "../../../components/ButtonSend";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"5px"} marginB={"65px"}>
                    <SectionTitle size={"32px"}>Contact Us</SectionTitle>
                    <CircleIcon/>
                </FlexWrapper>

                <StyledForm>
                    <FlexWrapper direction={"column"}>
                        <SectionTitle size={"36px"}>Get in touch</SectionTitle>
                        <StyledField placeholder={"E-mail"}/>
                        <StyledField placeholder={"Phone"}/>
                        <StyledField placeholder={"Massage"} as={"textarea"}/>
                        <ButtonSend/>
                    </FlexWrapper>

                    <FlexWrapper>
                        <Location/>
                        <Phone/>
                        <Email/>
                    </FlexWrapper>

                </StyledForm>

            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
  background: #FFF;
  margin-bottom: 60px;
`;

const StyledForm = styled.form`
  //max-width: 500px;
  //width: 100%;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
  //gap: 30px;
  //margin: 0 auto;

  width: 932px;
  height: 462px;
  background: ${theme.whiteThemeColors.primaryBg};
  box-shadow: 8px 8px 34px 0px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
`;

const StyledField = styled.input`

`;