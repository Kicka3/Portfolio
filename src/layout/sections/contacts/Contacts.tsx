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


                <StyledForm>


                    <FlexWrapper direction={"column"} wrap={"nowrap"} gap={"23px"} justify={"flex-start"}>
                        <SectionTitle size={"36px"}>Get in touch</SectionTitle>

                        <FlexWrapper gap={"7px"}>
                        <StyledField placeholder={"E-mail"}/>
                        <StyledField placeholder={"Phone"}/>
                        </FlexWrapper>

                        <StyledField placeholder={"Massage"} as={"textarea"}/>
                        <ButtonSend/>
                    </FlexWrapper>


                    <FlexWrapper direction={"column"}>
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
  //display: flex;
  //flex-direction: row;
  //align-items: center;
  
  
  width: 932px;
  height: 462px;
  background: ${theme.whiteThemeColors.primaryBg};
  box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
  margin: 0 auto;
`;

const StyledField = styled.input`
  border-radius: 9px;
  background: ${theme.whiteThemeColors.bgColorInputContacts};
`;