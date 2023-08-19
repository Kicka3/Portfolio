import React from 'react';
import myImg from "../../assets/images/myPhoto.jpg";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {TitleMainWrapper} from "../../components/TitleMainWrapper";
import {ButtonsWrapper} from "../../components/ButtonsWrapper";


type NamePropsType = {
    color?: string,
}


export const Main = () => {
    return (
        <div>
            {/*<FlexWrapper align={"center"} direction={"row-reverse"}>*/}
            <TitleMainWrapper>
                <div>
                    <MyPhoto src={myImg}/>
                </div>
                <div>
                    <h2>I’m <Name color={"#2157F2"}> Kirill </Name>Ozornin</h2>
                    <h1>A Web Developer</h1>
                    <p>Lore ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aut ea et
                        excepturi expedita impedit molestias neque nobis quibusdam, reprehenderit repudiandae sequi
                        sunt
                        tenetur!</p>
                    <ButtonsWrapper>See Projects</ButtonsWrapper>
                    <ButtonsWrapper>Download Resume</ButtonsWrapper>
                </div>
            </TitleMainWrapper>
            {/*</FlexWrapper>*/}
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

const Name = styled.span`
  color: ${props => props.color || "red"};
`;