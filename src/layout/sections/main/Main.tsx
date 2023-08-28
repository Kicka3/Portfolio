import React from 'react';
import myImg from "../../../assets/images/myPhoto2.png";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {MyMainDecs} from "../../../components/myMainDecs/MyMainDecs";
import {BgLeftPicture} from "../../../components/bgLeftPicture";
import {Logo} from "../../../components/logo/Logo";
import {HeaderMenu} from "../../header/headerMenu/HeaderMenu";


export const Main = () => {
    return (
            <StyledMain>

                <Container>
                <StyledHeader>
                    {/*<Container>*/}
                    <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                        <Logo/>
                        <HeaderMenu/>
                    </FlexWrapper>
                    {/*</Container>*/}
                </StyledHeader>
                {/*header*/}

                    <TitleMainWrapper>
                        <FlexWrapper gap={"0"} wrap={"no-wrap"}>
                            <MyPhoto alt="My Photo"/>
                            <MyMainDecs/>
                        </FlexWrapper>
                    </TitleMainWrapper>
                    {/*<BgLeftPicture/>*/}

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

  //margin: 107px 131px 251px 151px;

  width: 867px;
  height: 507px;

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

const StyledLink = styled.a`

`;