import styled from "styled-components";


type TitleMainWrapperPropsType = {
    direction?: string,
    justify?: string,
    align?: string,
    wrap?: string,
    gap?: string,
}

export const TitleMainWrapper = styled.div<TitleMainWrapperPropsType>`
  display: flex;
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
  flex-direction: ${props => props.direction || "row"};
  flex-wrap: ${props => props.wrap || "no-wrap"};
  gap: ${props => props.gap || "75px"};
  
  margin: 107px 131px 195px 151px;
  
  max-width: 1158px;
  max-height: 507px;
  flex-shrink: 0;

  border-radius: 0px 200px;
  background: linear-gradient(132deg, rgba(255, 255, 255, 0.50) 0%, rgba(0, 71, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  
  & p {
    max-width: 377px;
  }
  
  & h1 {
    
  }
`;