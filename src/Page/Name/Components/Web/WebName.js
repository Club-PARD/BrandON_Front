import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const WebName = () => {
  return (
    <>
    <GlobalStyle />
      <Container>
        <Header>
            <BrandText>BRAND ON<BrandText2>에 오신 걸 환영합니다. 사용자 님</BrandText2>
            </BrandText>
        </Header>
        <HeaderSecond>
            <SecondText>사용하시기 전에,
            <SecondText2>‘나' 설명서와 ‘나' 명함</SecondText2>에 들어갈 이름을 입력해주세요. 마이페이지에서 변경이 가능해요.</SecondText>
        </HeaderSecond>

        <form>

        </form>
      </Container>
      
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
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/magenta.gif');
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const BrandText = styled.div`
    color: var(--White, #FFF);
    font-family: 'Pretendard';
    font-size: 100px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const BrandText2 = styled.div`
    color: #FFF;
    font-family: 'Playfair Display';
    font-size: 60px;
    font-style: italic;
    font-weight: 700;
    line-height: normal;
`;
const SecondText = styled.div`
    color: #FFF;
    font-family: 'Pretendard';
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;
const SecondText2 = styled.span`
    color: var(--White, #FFF);
    font-family: 'Pretendard';
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Container = styled.div`
    margin-top: 58px;
    margin-left: 135px;
    margin-right: 219px;
`;
const Header = styled.div`
    height: 195px;
`;
const HeaderSecond = styled.div`
    width:82%;
    height:154px;
`;
const Name = styled.input`
    
`;
