import React from 'react';
import myImg from "../../../assets/images/myPhoto.jpg";
import styled from "styled-components";
import {TitleMainWrapper} from "../../../components/TitleMainWrapper";
import {Name} from "../../../components/NameWrapper";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Icon} from "../../../components/icon/icon";


export const Main = () => {
    return (
        <>
            <TitleMainWrapper gap={"76px"}>
                <>
                    <MyPhoto src={myImg} alt="My Photo"/>
                </>
                <FlexWrapper direction={"column"} gap={"5px"}>
                    <h2>I’m <Name color={"#2157F2"}> Kirill </Name>Ozornin</h2>
                    <h1>A Web Developer</h1>
                    <p>Lore ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aut ea et
                        excepturi expedita impedit molestias neque nobis quibusdam, reprehenderit repudiandae sequi
                        sunt
                        tenetur!</p>

                    <FlexWrapper gap={"32px"}>
                        <Button padding={"1px 5px"} fSize={"15px"} color={"#FFF"} background={"#2157F2"} borderRadius={"20px"} width={"200px"} height={"54px"}>
                            <div>See Projects</div>
                            <span><Icon iconId={"arrowR"} width={"28px"} height={"28px"} viewBox="0 0 28 28"/></span>
                        </Button>
                        <Button color={"#6C92FF"} fSize={"15px"}>
                            {/*<div>icon</div>*/}
                            <>Download Resume</>
                        </Button>
                    </FlexWrapper>


                </FlexWrapper>
            </TitleMainWrapper>
        </>
    )
        ;
}


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