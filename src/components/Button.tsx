import styled from "styled-components";

import React from 'react';

export const Button = () => {
    return (
        <ButtonStyled type={"submit"}>Send</ButtonStyled>

    );
};



const ButtonStyled = styled.button`
  color: blue;
`;