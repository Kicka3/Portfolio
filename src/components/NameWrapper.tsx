import styled from "styled-components";


type NamePropsType = {
    color?: string,
}

export const Name = styled.span<NamePropsType>`
  color: ${props => props.color || "red"};
  margin-right: 0 !important;
`;