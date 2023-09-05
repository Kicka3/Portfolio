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
import {font} from "../../../styles/Common";


export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"5px"} marginB={"65px"}>
                    <SectionTitle size={"32px"}>Contact Us</SectionTitle>
                    <CircleIcon/>
                </FlexWrapper>


                <StyledFormWrapper>
                    <SectionTitle marginB={"23px"} size={"36px"}>Get in touch</SectionTitle>

                    <FlexWrapper align={"flex-start"} gap={"128px"}>
                        <FlexWrapper gap={"37px"} direction={"column"} justify={"flex-start"} align={"stretch"}
                                     wrap={"wrap"}>
                            <InputWrapper>

                                <FlexWrapper  direction={"column"} wrap={"wrap"} gap={"23px"}>
                                    <FlexWrapper gap={"7px"}>
                                        <StyledField placeholder={"E-mail"}/>
                                        <StyledField placeholder={"Phone"}/>
                                    </FlexWrapper>

                                    <StyledFieldMessageTextArea placeholder={"Message"} as={"textarea"}/>
                                </FlexWrapper>

                            </InputWrapper>
                            <ButtonSend/>
                        </FlexWrapper>

                        <FlexWrapper gap={"48px"} alignContent={"center"} direction={"column"} justify={"flex-start"}
                                     align={"flex-start"} wrap={"wrap"}>
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
                </StyledFormWrapper>

            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
  background: #FFF;
  margin-bottom: 60px;
  margin-top: 61px;
  
  textarea {
    resize: none;
  }
`;

const StyledFormWrapper = styled.div`
  height: 462px;
  max-width: 932px;
  width: 100%;
  background: ${theme.whiteThemeColors.primaryBg};
  box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  padding: 53px 113px 46px 82px;


  @media ${theme.media.mobile948} {
    height: 434px;
    max-width: 822px;
    width: 100%;
    padding: 49px 62px 34px 58px;
  }
  
  @media ${theme.media.mobile948} {
    height: 434px;
    max-width: 822px;
    width: 100%;
    padding: 49px 37px 34px 37px;
    
    & > ${FlexWrapper} {
      gap: 53px;
    }
  }
  
  
  
`;

const InputWrapper = styled.form`
  width: 429px;
`;


const StyledField = styled.input`
  background-color: ${theme.whiteThemeColors.bgColorInputContacts};
  color: ${theme.whiteThemeColors.dontForms};
  ${font({family: "Roboto , sans-serif", Fmin: 10, Fmax: 13})};
  //font-family: Roboto, sans-serif;
  //font-size: 13px;
  border-radius: 9px;
  width: 100%;
  border: none;
  padding: 10px 20px 8px 29px;
  
  &:focus-visible {
    outline: 1px solid ${theme.whiteThemeColors.dontForms};
  }
`;

const StyledFieldMessageTextArea = styled.input`
  background: ${theme.whiteThemeColors.bgColorInputContacts};
  color: ${theme.whiteThemeColors.dontForms};
  ${font({family: "Roboto , sans-serif", Fmin: 10, Fmax: 13})};
  //font-family: Roboto, sans-serif;
  //font-size: 13px;
  border: none;
  width: 429px;
  height: 152px;
  border-radius: 9px;
  padding: 17px 25px 17px 29px;
  text-transform: capitalize;
  
  &:focus-visible {
    outline: 1px solid ${theme.whiteThemeColors.dontForms};
  }
`;