import styled from "styled-components";

type SectionTitlePropsType = {
    color?: string,
    size?: string,
    lineH?: string,
    marginB?: string,
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: ${props => props.color || "#42446E"};
  font-family: Roboto;
  font-size: ${props => props.size || "48px"};
  text-align: center;
  margin-bottom: ${props => props.marginB || "15px"};
  line-height: ${props => props.lineH};
`;



