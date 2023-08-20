import React from 'react';
import styled from "styled-components";



type WorkPropsType = {
    title: string,
    text: string,
    src: string,

}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src} alt=""/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href="#">Live Preview</Link>
            <Link href="#">View Code</Link>
        </StyledWork>
    );
};


const StyledWork = styled.div`
  border-radius: 20px;
  background: #FFF;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
`;


const Image = styled.img`

`;

const Link = styled.a`

`;

const Title = styled.h3`

`;

const Text = styled.p`

`;
