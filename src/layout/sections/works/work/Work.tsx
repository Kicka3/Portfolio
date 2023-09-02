import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {Button} from "../../../../components/Button";
import {theme} from "../../../../styles/Theme";
import {ButtonWorks} from "../../../../components/ButtonWorks";


type WorkPropsType = {
    title?: string,
    text?: string,
    src: string,

}

export const Work = (props: WorkPropsType) => {
    return (

        <StyledWork src={props.src}>

            <WorkCardsWrapper>
                <Title>{props.title}</Title>
                <FlexWrapper justify={"flex-start"} gap={"21px"}>
                    <FlexWrapper justify={"space-between"} gap={"11px"}>
                        <ButtonWorks href={"#"} padding={"1px 5px"} fSize={"14px"} color={"#FFF"}
                                background={"#2157F2"}
                                borderRadius={"12px"} width={"109px"} height={"29px"}>
                            <span>Live Preview</span>
                        </ButtonWorks>
                    </FlexWrapper>

                    <FlexWrapper gap={"11px"}>
                        <ButtonWorks href={"#"} padding={"1px 5px"} fSize={"14px"} color={"#FFF"}
                                background={"#2157F2"}
                                borderRadius={"12px"} width={"109px"} height={"29px"}>
                            <span>View Code</span>
                        </ButtonWorks>
                    </FlexWrapper>

                </FlexWrapper>
            </WorkCardsWrapper>

        </StyledWork>
    );
};


const WorkCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px 30px;
  border-radius: 0 0 26px 26px;
  transition: .5s;

  &:hover {
    background-color: ${theme.whiteThemeColors.secondaryBg};
  }
`;


const StyledWork = styled.div<WorkPropsType>`
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  max-width: 270px;
  width: 100%;
  height: 394px;
  cursor: pointer;
  border-radius: 26px 26px;
  background-color: #F9F9FC;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  z-index: 8888;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
`;

const Title = styled.h3`
  padding-right: 33px;
  margin-bottom: 29px;
  font-size: 20px;
  color: #2157F2;
  overflow: hidden;
  width: 250px;
`;
