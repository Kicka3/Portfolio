import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {CircleIcon} from "../../../components/svgIcons/icons/CircleIcon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {ButtonSend} from "../../../components/ButtonSend";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {ContactDecs} from "./contactDecs/ContactDecs";
import {LocationImg} from "./contactDecs/imgCons/LocationImg";
import {EmailImg} from "./contactDecs/imgCons/EmailImg";
import {PhoneImg} from "./contactDecs/imgCons/PhoneImg";


export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"5px"} marginB={"65px"}>
                    <SectionTitle size={"32px"}>Contact Us</SectionTitle>
                    <CircleIcon/>
                </FlexWrapper>


                <StyledFormWrapper>
                    <SectionTitle size={"36px"}>Get in touch</SectionTitle>

                    <FlexWrapper>


                        <FlexWrapper direction={"column"} justify={"flex-start"} align={"stretch"} wrap={"no-wrap"}>
                            <InputWrapper>
                            <FlexWrapper gap={"7px"}>
                                <StyledField placeholder={"E-mail"}/>
                                <StyledField placeholder={"Phone"}/>
                            </FlexWrapper>
                            <StyledFieldMessageTextArea placeholder={"Massage"} as={"textarea"}/>
                            </InputWrapper>
                        </FlexWrapper>

                        <FlexWrapper>
                            <FlexWrapper gap={"26px"}>
                                <LocationImg/>
                                <ContactDecs locTitle={"Location"} locDesc={"Ekaterinburg"}/>
                            </FlexWrapper>

                            <FlexWrapper gap={"26px"}>
                                <PhoneImg/>
                                <ContactDecs locTitle={"Phone"} locDesc={"+7912382***4"}/>
                            </FlexWrapper>

                            <FlexWrapper gap={"26px"}>
                                <EmailImg/>
                                <ContactDecs locTitle={"Email"} locDesc={"ozornin_kirill@inbox.ru"}/>
                            </FlexWrapper>
                        </FlexWrapper>


                    </FlexWrapper>

                    <ButtonSend/>
                </StyledFormWrapper>

            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
  background: #FFF;
  margin-bottom: 60px;
  margin-top: 61px;
`;

const StyledFormWrapper = styled.div`
  width: 932px;
  height: 462px;
  background: ${theme.whiteThemeColors.primaryBg};
  box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
  margin: 0 auto;
`;

const InputWrapper = styled.form`
  width: 429px;
`;


const StyledField = styled.input`
  border-radius: 9px;
  width: 100%;
  background: ${theme.whiteThemeColors.bgColorInputContacts};
 
`;

const StyledFieldMessageTextArea = styled.input`
  width: 429px;
  height: 152px;
  border-radius: 9px;
  background: ${theme.whiteThemeColors.bgColorInputContacts};
`;