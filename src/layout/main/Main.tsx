import React from 'react';
import myImg from "../../assets/images/myPhoto.jpg";
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";


export const Main = () => {
    return (
        <div>
            {/*<FlexWrapper align={"center"} direction={"row-reverse"}>*/}
                <div>
                    <div>
                        <MyPhoto src={myImg}/>
                    </div>
                    <div>
                        <h2>I’m <span> Kirill </span>Ozornin</h2>
                        <h1>A Web Developer</h1>
                        <p>Lore ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto aut ea et
                            excepturi expedita impedit molestias neque nobis quibusdam, reprehenderit repudiandae sequi
                            sunt
                            tenetur!</p>
                    </div>
                </div>
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


const StyledMain = styled.div`
  min-height: 100vh;
`;

const StyledPar = styled.p`
  max-width: 376px;
  max-height: 90px;
`;