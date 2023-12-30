import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const Counter = ({value, maxLength}) => (
  <span style={{
    color: 'var(--Grey_Scale-0, #FFF)',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    marginLeft:'-13%'}}>
    {value.length}/{maxLength}글자
  </span>
);

const WebName = () => {

  const [text, setText] = useState('');
  const maxLength = 7; // 최대 글자 수

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= maxLength) {
      setText(inputValue);
    }
  };

  return (
    <>
    <Container>
      <Container2>
        <Header>
        <HeaderImg src="NavLogo.png" ></HeaderImg> 
          <WelcomePont> 
            에 오신 걸 환영합니다.
          </WelcomePont>              
          
        </Header>

        <BrandImg>
          <img src="Rectangle138.png"></img>
        </BrandImg>

        <IntroduceDiv>
          <IntroducePont>사용하시기 전에,</IntroducePont>
          <IntroducePont>‘<IntroduceBoldPont>Brand Story</IntroduceBoldPont>'와 '
          <IntroduceBoldPont>Brand Concept</IntroduceBoldPont>'에 들어갈 이름을 입력해주세요.</IntroducePont>
        </IntroduceDiv>

        <WriteNameDiv>

          <InputDiv>
            <InputName  
            type="text"
            value={text}  
            onChange={handleInputChange}
            maxLength={maxLength}
            placeholder="이름을 입력해주세요"></InputName>
            <Counter value={text} maxLength={maxLength}></Counter>
          </InputDiv>

          <ButtonDiv>
            <Button disabled={text.length !== 7}>
              <ConfirmPont>확인</ConfirmPont>
            </Button>
          </ButtonDiv>
        </WriteNameDiv>
       
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
const ConfirmPont = styled.span`
  color: var(--White, var(--Grey_Scale-0, #FFF));
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Container =styled.div`
  display: flex;
  justify-content: center;
`;
const Container2 = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.30);
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
const HeaderImg = styled.img`
  width:29%;
  //width:257px;
  margin-right:2%;

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
  width:74%;
  height:8%;
  margin-left: 13%;
  margin-bottom: 6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const InputDiv = styled.div`
  flex: 0 0 79%;
  height: 100%;
  padding:0;
`;
const InputName = styled.input`
  border-radius: 10px;
  border: 1.5px solid var(--stroke, #D2D2D2);
  width:100%;
  height:100%;
  flex-shrink: 0;
  background-color: transparent;
  &::placeholder {
    color: var(--Gray-10, #ABABAB);
    font-family: 'Pretendard';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;  
    padding-left: 4%;
  }
`;
const ButtonDiv =styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button`
  width:82%;
  height:100%;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background-color: #8F2EFF;
  cursor:pointer;
  box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.10) inset, 25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.10) inset;
  backdrop-filter: blur(25.366666793823242px);
  &:disabled{
    opacity: 0.5;
    background-color: rgba(255, 255, 255, 0.10);
  }
  &:disabled:hover{
    background-color: #2B2D36;
  }
`;

