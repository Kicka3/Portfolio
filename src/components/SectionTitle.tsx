import styled from "styled-components";

type SectionTitlePropsType = {
    color?: string,
    size?: string,
    lineH?: string,
    marginB?: string,
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: ${props => props.color || "#42446E"};
  font-family: Poppins;
  font-size: ${props => props.size || "48px"};
  text-align: center;
  margin-bottom: ${props => props.marginB || "15px"};
  line-height: ${props => props.lineH || "26px"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //background: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
  background-clip: text;
    
`;



