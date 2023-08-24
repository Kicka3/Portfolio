import React from 'react';
import styled from "styled-components";

export const ButtonSlogan = () => {
    return (
        <ButtonSloganStyled>Contact Me</ButtonSloganStyled>
    );
};

const ButtonSloganStyled = styled.button`
  color: white;
  outline: none;
  border: none;
  background-color: blue;
  border-radius: 5px;
`;