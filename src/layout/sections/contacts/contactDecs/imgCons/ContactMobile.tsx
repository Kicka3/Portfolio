import {FlexWrapper} from "../../../../../components/FlexWrapper";
import {LocationImg} from "./LocationImg";
import {ContactDecs} from "../ContactDecs";
import {PhoneImg} from "./PhoneImg";
import {EmailImg} from "./EmailImg";
import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../../styles/Theme";
import {Container} from "../../../../../components/Container";

export const ContactMobile = () => {
    return (
        <StyledContactMobile>
            <Container>
                <ContactDecsMobile>

                    <JustWrap>
                    <FlexWrapper gap={"48px"} direction={"column"}>

                        <FlexWrapper gap={"26px"} justify={"flex-start"}>
                            <LocationImg/>
                            <ContactDecs locTitle={"Location"} locDesc={"Ekaterinburg"}/>
                        </FlexWrapper>

                        <FlexWrapper gap={"26px"} justify={"flex-start"}>
                            <PhoneImg/>
                            <ContactDecs locTitle={"Phone"} locDesc={"+7912382***4"}/>
                        </FlexWrapper>

                        <FlexWrapper gap={"26px"}>
                            <EmailImg/>
                            <ContactDecs locTitle={"Email"} locDesc={"ozornin_kirill@inbox.ru"}/>
                        </FlexWrapper>
                    </FlexWrapper>
                    </JustWrap>
                </ContactDecsMobile>
            </Container>
        </StyledContactMobile>
    );
};

const JustWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
`;

const StyledContactMobile = styled.div`
  max-width: 592px;
  width: 100%;
  flex-shrink: 0;
  background: #FFF;
  box-shadow: 16px 16px 66px 0 rgba(0, 0, 0, 0.05);
  display: none;
  margin: 0 auto;

  @media ${theme.media.newTablet768} {
    display: block;
  }
`;

const ContactDecsMobile = styled.div`
  padding: 60px 0 90px 0;
`;