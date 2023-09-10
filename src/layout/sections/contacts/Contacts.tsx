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
import {HThreeTitle} from "../../../components/H3title";
import {ContactMobile} from "./contactDecs/imgCons/ContactMobile";
import {Fade} from "react-awesome-reveal";


export const Contact = () => {
    return (
        <StyledContacts id={"contact"}>
            <Container>
                <FlexWrapper justify={"center"} align={"center"} direction={"column"} gap={"5px"} marginB={"65px"}>
                    <Fade cascade={true}
                          damping={0.2}
                          direction={"right"}
                    >
                        <SectionTitle size={"32px"}>Contact Us</SectionTitle>
                    </Fade>
                    <Fade cascade={true}
                          damping={2}
                          direction={"left"}
                    >
                        <CircleIcon/>
                    </Fade>
                </FlexWrapper>


                <StyledFormWrapper>
                    <HThreeTitle marginB={"20px"} title={"Get in Touch"}/>

                    <FlexWrapper align={"flex-start"} gap={"128px"}>
                        <FlexWrapper gap={"37px"} direction={"column"} justify={"flex-start"} align={"stretch"}
                                     wrap={"wrap"}>
                            <InputWrapper>

                                <FlexWrapper direction={"column"} wrap={"wrap"} gap={"23px"}>
                                    <FlexWrapper gap={"7px"}>
                                        <StyledField placeholder={"E-mail"}/>
                                        <StyledField placeholder={"Phone"}/>
                                    </FlexWrapper>

                                    <StyledFieldMessageTextArea placeholder={"Message"} as={"textarea"}/>
                                </FlexWrapper>

                            </InputWrapper>
                            <ButtonSend/>
                        </FlexWrapper>

                        <ContactDecsWrapperDesktop>
                            <FlexWrapper gap={"48px"} alignContent={"center"} direction={"column"}
                                         justify={"flex-start"}
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
                        </ContactDecsWrapperDesktop>

                    </FlexWrapper>
                </StyledFormWrapper>

                <FlexWrapper>
                    <ContactMobile/>
                </FlexWrapper>


            </Container>
        </StyledContacts>
    );
};

const ContactDecsWrapperDesktop = styled.div`
  display: block;

  @media ${theme.media.newTablet768} {
    display: none;

  }
`;

const StyledContacts = styled.section`
  background: #FFF;
  margin-bottom: 60px;
  margin-top: 61px;

  textarea {
    resize: none;
  }
`;

const StyledFormWrapper = styled.div`
  //min-height: 462px;
  max-width: 932px;
  width: 100%;
  background: ${theme.whiteThemeColors.primaryBg};
  box-shadow: 8px 8px 34px 0 rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  padding: 53px 113px 46px 82px;


  @media ${theme.media.mobile948} {
    //height: 434px;
    max-width: 822px;
    width: 100%;
    padding: 49px 62px 34px 58px;
  }

  @media ${theme.media.mobile948} {
    //height: 434px;
    max-width: 822px;
    width: 100%;
    padding: 49px 37px 34px 37px;

    & > ${FlexWrapper} {
      gap: 53px;
    }

  }


  @media ${theme.media.newTablet768} {
    max-width: 593px;
    margin-bottom: 42px;

    & > ${FlexWrapper} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
    }
  }


`;

const InputWrapper = styled.form`
  width: 429px;
  display: flex;
  align-content: space-around;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;



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

  @media ${theme.media.mobileIphone375} {
    width: 44%;
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

  @media ${theme.media.mobile493} {
    max-width: 341px;
  }

  @media ${theme.media.mobileIphone375} {
    max-width: 300px;
    position: relative;
    left: 14px;
  }
}
`;