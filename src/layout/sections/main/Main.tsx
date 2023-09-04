import React from 'react';
import myImg from "../../../assets/images/myPhoto2.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {MyMainDecs} from "../../../components/myMainDecs/MyMainDecs";
import {BgLeftPicture} from "../../../components/bgLeftPicture";
import {Logo} from "../../../components/logo/Logo";
import {HeaderMenu} from "../../header/headerMenu/HeaderMenu";
import {CircleBg} from "../../../components/CircleBg";
import {XBgIcon} from "../../../components/xBgIcon";
import {MobileHeaderMenu} from "../../header/mobileMenu/MobileHeaderMenu";
import {theme} from "../../../styles/Theme";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <StyledHeader>
                    <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                        <Logo/>
                        <HeaderMenu/>
                        <MobileHeaderMenu/>
                    </FlexWrapper>
                </StyledHeader>
                <BgLeftPicture/>
                <CircleBg/>
                <XBgIcon/>

                <TitleMainWrapper>
                    <FlexWrapper gap={"0"}>
                        <MyPhoto alt="My Photo"/>
                        <MyMainDecs/>
                    </FlexWrapper>
                </TitleMainWrapper>

            </Container>
        </StyledMain>
    );
}


const StyledHeader = styled.header`
  background-color: #FFF;
  padding: 15px 0;
`;


const StyledMain = styled.section`

`;

const TitleMainWrapper = styled.div`
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
    margin-right: 80px;

    @media ${theme.media.tablet} {
      margin-right: 0;
    }
  }

  & h1 {
    margin-bottom: 19px;
  }

  @media ${theme.media.mobile1345} {
    flex-wrap: wrap;
  }

  @media ${theme.media.mobile1161} {
    height: 477px;
  }
  
  @media ${theme.media.mobile1110} {
    height: 806px;
    margin: 49px 131px 120px 151px;
    & ${FlexWrapper} {
      flex-wrap: wrap;
    }
  }
  
  
`;

const MyPhoto = styled.img`
  width: 401px;
  height: 401px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 25px solid #FFF;
  object-fit: cover;
  background: url("${myImg}") 50% / cover no-repeat, #2157F2;


  @media ${theme.media.mobile1207} {
    width: 361px;
    height: 361px;
  }
  
  @media ${theme.media.mobile1161} {
    width: 333px;
    height: 333px;
  }

  @media ${theme.media.mobile502} {
    left: 28px;
    width: 334px;
    height: 334px;
  }

  @media ${theme.media.mobile444} {
    width: 334px;
    height: 334px;
  ;
  }

`;

const StyledLink = styled.a`

`;