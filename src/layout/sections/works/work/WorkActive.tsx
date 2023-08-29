import React from 'react';
import styled from "styled-components";
import {ViewCodeIcon} from "../../../../components/svgIcons/icons/ViewCodeIcon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Icon} from "../../../../components/icon/icon";


type WorkPropsType = {
    title: string,
    text: string,
    src: string,

}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <div>
                <Image src={props.src} alt=""/>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </div>
            <FlexWrapper justify={"flex-start"} gap={"47px"} marginL={"30px"} marginB={"25px"}>

                <FlexWrapper justify={"space-between"} gap={"11px"}>
                    <ViewCodeIcon/>
                    <Link href="#">Live Preview</Link>
                </FlexWrapper>
                <FlexWrapper justify={"space-between"} gap={"11px"}>
                    <Icon iconId={"Git"} width={"20px"} height={"20px"} viewBox={"0 0 88 88"}/>
                    <Link href="#">View Code</Link>
                </FlexWrapper>

            </FlexWrapper>
        </StyledWork>
    );
};


const StyledWork = styled.div`
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  //border-radius: 20px;
  //max-width: 375px;
  //max-height: 154px;
  max-height: 570px;
  max-width: 270px;
  cursor: pointer;
  border-radius: 0 0 26px 26px;
  background: #A6BCFA;

  //position: relative;
  z-index: 99999;
`;

const Image = styled.img`
  border-radius: 20px 20px 0px 0px;
  width: 100%;
  max-height: 260px;
  flex-shrink: 0;
  object-fit: cover;
  margin-bottom: 27px;
`;

const Title = styled.h3`
  padding-left: 29px;
  padding-right: 46px;
  margin-bottom: 17px;
`;

const Text = styled.p`
  margin-bottom: 21px;
  padding-right: 32px;
  padding-left: 29px;
`;

const Link = styled.a`
  color: #000;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
  text-decoration-line: underline;

  :hover {
    background-color: #A6BCFA;
  }
`;
