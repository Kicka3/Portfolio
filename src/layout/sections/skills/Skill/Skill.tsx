import React from 'react';
import {Icon} from "../../../../components/icon/icon";
import styled from "styled-components";


type skillPropsType = {
    iconId: string,
}


export const Skill = (props: skillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} />
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
    width: 66%;
  
`;

