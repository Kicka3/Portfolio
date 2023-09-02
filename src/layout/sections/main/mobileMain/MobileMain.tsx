import React from 'react';
import myImg from "../../../../assets/images/myPhoto2.png";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {Container} from "../../../../components/Container";
import {MyMainDecs} from "../../../../components/myMainDecs/MyMainDecs";
import {BgLeftPicture} from "../../../../components/bgLeftPicture";
import {Logo} from "../../../../components/logo/Logo";
import {HeaderMenu} from "../../../header/headerMenu/HeaderMenu";
import {CircleBg} from "../../../../components/CircleBg";
import {XBgIcon} from "../../../../components/xBgIcon";
import {MobileHeaderMenu} from "../../../header/mobileMenu/MobileHeaderMenu";


export const MobileMain = () => {
    return (
        <StyledMobileMain>
            <Container>
                <StyledMobileHeader>
                    <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                        <Logo/>
                        <HeaderMenu/>
                        <MobileHeaderMenu/>
                    </FlexWrapper>
                </StyledMobileHeader>
                <BgLeftPicture/>
                <CircleBg/>
                <XBgIcon/>

                <TitleMobileMainWrapper>
                    <FlexWrapper gap={"0"} wrap={"no-wrap"}>
                        <MyPhoto alt="My Photo"/>
                        <MyMainDecs/>
                    </FlexWrapper>
                </TitleMobileMainWrapper>

            </Container>
        </StyledMobileMain>
    );
}


const StyledMobileHeader = styled.header`
  background-color: #FFF;
  padding: 15px 0;
`;


const StyledMobileMain = styled.section`

`;

const TitleMobileMainWrapper = styled.div`
  gap: 75px;
  border-radius: 200px 0;
  background: linear-gradient(132deg, rgba(255, 255, 255, 0.50) 0%, rgba(0, 71, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  max-width: 1158px;
  height: 507px;
  margin: 188px 131px 251px 151px;
  padding: 45px; 

  & h2 {
    margin-top: 64px;
    margin-right: 80px
  }

  & h1 {
    margin-bottom: 19px;
  }
`;

const MyPhoto = styled.img`
  width: 401px;
  height: 401px;
  flex-shrink: 0;
  border-radius: 334px;
  border: 25px solid #FFF;
  object-fit: cover;
  background: url("${myImg}") 50% / cover no-repeat, #2157F2;
`;
