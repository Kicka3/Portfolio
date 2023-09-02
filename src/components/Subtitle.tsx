
import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


type SubTitlePropsType = {
    color?: string,
    size?: string,
    lineH?: string,
}


export const Subtitle = styled.h3<SubTitlePropsType>`
  color: ${theme.whiteThemeColors.fontOne};
  ${font({family: "Roboto , sans-serif" ,weight: "700", lineHeight: "26px", Fmin: 15, Fmax: 32})};
  //  font-size: ${props => props.size || "15px"};
  // line-height: ${props => props.lineH || "26px"};
  margin-bottom: 70px;
  margin-top: 40px;
`;

