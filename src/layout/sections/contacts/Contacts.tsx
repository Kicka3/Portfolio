import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonSend} from "../../../components/ButtonSend";


export const Contact = () => {
    return (
        <StyledContacts>
            <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"5px"} marginB={"65px"}>
                <SectionTitle>Contact</SectionTitle>
                <CircleIcon/>
            </FlexWrapper>
            <StyledForm>
                <StyledField placeholder={"E-mail"}/>
                <StyledField placeholder={"Phone"}/>
                <StyledField placeholder={"Massage"} as={"textarea"}/>
                <ButtonSend/>
            </StyledForm>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
  min-height: 50vh;
  background: #FFF;
  margin-bottom: 60px;
`;

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0 auto;
`;

const StyledField = styled.input`

`;