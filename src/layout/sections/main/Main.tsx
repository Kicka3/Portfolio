import React from 'react';
import myImg from "../../../assets/images/myPhoto.jpg";
import {Name} from "../../../components/NameWrapper";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/icon";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {BgLeftPicture} from "../../../components/bgLeftPicture";
import {MyMainDecs} from "../../../components/myMainDecs/MyMainDecs";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <TitleMainWrapper>
                    <FlexWrapper gap={"0"} wrap={"wrap"}>
                        <MyPhoto src={myImg} alt="My Photo"/>
                        <MyMainDecs/>

                        {/*<div>*/}
                        {/*    <FlexWrapper gap={"32px"}>*/}
                        {/*        <Button padding={"1px 5px"} fSize={"15px"} color={"#FFF"} background={"#2157F2"}*/}
                        {/*                borderRadius={"20px"} width={"200px"} height={"54px"}>*/}
                        {/*            <div>See Projects</div>*/}
                        {/*            <span><Icon iconId={"arrowR"} width={"28px"} height={"28px"}*/}
                        {/*                        viewBox="0 0 28 28"/></span>*/}
                        {/*        </Button>*/}
                        {/*        <Button color={"#6C92FF"} fSize={"15px"}>*/}
                        {/*            <>Download Resume</>*/}
                        {/*        </Button>*/}
                        {/*    </FlexWrapper>*/}
                        {/*</div>*/}
                    </FlexWrapper>
                </TitleMainWrapper>
                {/*<BgLeftPicture/>*/
                }
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.section`

`;

const TitleMainWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 75px;

  border-radius: 200px 0;
  background: linear-gradient(132deg, rgba(255, 255, 255, 0.50) 0%, rgba(0, 71, 255, 0.05) 100%);
  backdrop-filter: blur(10px);

  margin: 107px 131px 251px 151px;
  min-width: 1158px;
  height: 507px;

  & span {
    margin-right: 176px;
  }

  & h2 {
    margin-top: 64px;
    margin-right: 80px
  }

  & h1 {
    margin-bottom: 19px;
  }
`;

const TitleTextWrapper = styled.div`
  max-width: 422px;
`;

//Сделать фон синим!!!

const MyPhoto = styled.img`
  width: 401px;
  height: 401px;
  flex-shrink: 0;
  border-radius: 334px;
  border: 25px solid #FFF;
  object-fit: cover;
  background: 50% / cover no-repeat, #2157F2;
`;

const StyledLink = styled.a`

`;