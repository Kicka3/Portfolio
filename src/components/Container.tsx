import styled from "styled-components";

type ContainerPropsType = {
    maxWidth?: string,
    width?: string,
    minHeight?: string,

}

export const Container = styled.div<ContainerPropsType>`
  //max-width: 1170px;
  max-height: 946px;
  position: relative;
  max-width: 1440px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
  //outline: 2px solid red;
`;