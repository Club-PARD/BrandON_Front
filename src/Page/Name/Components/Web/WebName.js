import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const WebName = () => {
  return (
    <>
    <Container>
      <Container2>
        <Header>
          <BrandPont>BRAND
            <img src="on.png" ></img>
            N {' '}         
          </BrandPont>
          <WelcomePont> 에 오신 걸 환영합니다.</WelcomePont>
        </Header>

        <BrandImg>
          <img src="Rectangle138.png"></img>
        </BrandImg>

        <IntroduceDiv>
          <IntroducePont>사용하시기 전에,</IntroducePont>
          <IntroducePont>‘Brand Story'와 ‘Brand Concept'에 들어갈 이름을 입력해주세요.</IntroducePont>
        </IntroduceDiv>

        <div>
          test3
        </div>
       
      </Container2>
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
const BrandPont = styled.span`
  color: var(--White, var(--Grey_Scale-0, #FFF));
  font-family: 'Dr';
  font-size: 52.5px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%; /* 78.75px */
  text-transform: uppercase;
`;
const WelcomePont = styled.span`
  color: var(--Grey_Scale-0, #FFF);
  font-family: 'Pretendard';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 1rem;
`;
const IntroducePont = styled.div`
  color: var(--Grey_Scale-0, #FFF);
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const IntroduceBoldPont = styled.span`
  color: var(--White, var(--Grey_Scale-0, #FFF));
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Container =styled.div`
  display: flex;
  justify-content: center;
`;
const Container2 = styled.div`
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.10) inset, 25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.10) inset;
  backdrop-filter: blur(25.366666793823242px);
  width:62vw;
  height: 82vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding:0;
  margin-top: 8%;
`;
const BrandImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const IntroduceDiv = styled.div`
  width:60%;
  height:9%;
  margin-left: 13%;
`;
const WriteNameDiv = styled.div`
`;
const InputName = styled.input`

`;

