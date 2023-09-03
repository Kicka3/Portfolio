import styled from "styled-components";
import {font} from "../styles/Common";

type SectionTitlePropsType = {
    color?: string,
    size?: string,
    lineH?: string,
    marginB?: string,
    marginT?: string,
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
  color: ${props => props.color || "#000"};
  //font-family: Roboto,sans-serif;
  // font-size: ${props => props.size || "48px"};
  ${font({family: "Roboto , sans-serif",weight: "700", Fmin: 20, Fmax: 48})};
  margin-bottom: ${props => props.marginB || "5px"};
  margin-top: ${props => props.marginT};
  line-height: ${props => props.lineH};
  
`;



