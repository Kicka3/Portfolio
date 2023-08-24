import React from 'react';
import myImg from "../../../assets/images/myPhoto.jpg";
import styled from "styled-components";
import {TitleMainWrapper} from "../../../components/TitleMainWrapper";
import {ButtonsWrapper} from "../../../components/ButtonsWrapper";
import {Name} from "../../../components/NameWrapper";


export const Main = () => {
    return (
        <div>
            <TitleMainWrapper gap={"76px"}>
                <div>
                    <MyPhoto src={myImg} alt="My Photo"/>
                </div>
                <div>
                    <h2>I’m <Name color={"#2157F2"}> Kirill </Name>Ozornin</h2>
                    <h1>A Web Developer</h1>
                    <p>Lore ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aut ea et
                        excepturi expedita impedit molestias neque nobis quibusdam, reprehenderit repudiandae sequi
                        sunt
                        tenetur!</p>
                    <ButtonsWrapper color={"#fff"} background={"#2157F2"}>
                        See Projects
                    </ButtonsWrapper>
                    <ButtonsWrapper color={"#6C92FF"}>Download Resume</ButtonsWrapper>
                </div>
            </TitleMainWrapper>
        </div>
    );
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

