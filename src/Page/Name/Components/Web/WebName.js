import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const WebName = () => {
  return (
    <>

        <Container2>안녕</Container2>
 
    </>
  );
};

export default WebName;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Pretendard";
`;
const BrandPont = styled.span`
  color: var(--White, #FFF);
  font-family: "Pretendard";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const OnPont = styled.span`
  color: var(--White, #FFF);
  font-family: "Playfair Display";
  font-size: 40px;
  font-style: italic;
  font-weight: 700;
  line-height: normal;
`;

const Container2 = styled.div`
border-radius: 10px;
background: rgba(255, 255, 255, 0.10);
box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.10) inset, 25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.10) inset;
backdrop-filter: blur(25.366666793823242px);
width:62vw;
height: 82vh;
display: flex;
flex-direction: row;
justify-content: center;

`;

