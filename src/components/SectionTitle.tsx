import styled from "styled-components";

type SectionTitlePropsType = {
    color?: string,
    size?: string,
    lineH?: string,
    marginB?: string,
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: ${props => props.color || "#000"};
  font-size: ${props => props.size || "48px"};
  margin-bottom: ${props => props.marginB || "5px"};
  line-height: ${props => props.lineH};
  font-family: Roboto,sans-serif;
  text-align: center;
`;



