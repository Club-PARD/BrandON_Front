import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import BackgroundImg from "../../../../Assets/Loading_Background.jpg"
import Brandon from "../../../../Assets/brandon_final.gif"

const WebLoading = () => {

  document.body.style.overflow = "hidden";

  const TextList = [
    "Brandon이 사용자님의 답변을 확인했어요.",
    "Brandon이 MBTI를 근거로 사용자님의 답변을 분석하고 있어요.",
    "Brandon이 FAB 형태로 사용자님의 답변을 정리하고 있어요.",
    "Brandon이 분석을 토대로 명함을 제작하고 있어요.",
  ]

  // const [currentText, setCurrentText] = useState(TextList[0]);
  // const [index, setIndex] = useState(0);
  // const [animationKey, setAnimationKey] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prevIndex) => {
  //       const nextIndex = (prevIndex + 1) % TextList.length;
  //       setCurrentText(TextList[nextIndex]);
  //       setAnimationKey(prevKey => prevKey + 1);
  //       return nextIndex;
  //     });
  //   }, 5600);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Div>
      <Div style={{ display: "relative" }}>
        <Img src={BackgroundImg} style={{ zIndex: "0" }}></Img>
        <Div style={{ backgroundColor: "black", opacity: "60%", position: "absolute", height: "100%", top: "0", left: "0", zIndex: "1", }}></Div>
        <Wrapper>
          {/* <Text key={animationKey}>{currentText}</Text> */}
          <Text >{TextList[0]}</Text>
          <Text2 >{TextList[1]}</Text2>
          <Text3 >{TextList[2]}</Text3>
          <Text4 >{TextList[3]}</Text4>
        </Wrapper>
        <BrandonImg src={Brandon} style={{ zIndex: "3" }}></BrandonImg>

      </Div>
    </Div>
  );
};

export default WebLoading;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: "Pretendard";
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  background-color: white;
  /* border: 0.5px solid black; */
  border-radius: 0px;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  overflow: visible;
`;

const A = styled.a``;

const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0%;
  left: 0%;
`;

const BrandonIn = keyframes` 
  0% {
    transform: scale(0) translate(-50%, -50%);
  }

  25% {
    transform: scale(1.2) translate(-50%, -50%);
    opacity: 0.5;
  }

  35% {
    transform: scale(1) translate(-50%, -50%);
  }

  100% {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

const lineUp = keyframes` 
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;


const textRemove = keyframes` 
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  20% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
 
  100% {
    opacity: 0;
    transform: translateY(-180%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0px;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  background-Color: initial;
  color: white;
  font-Size: 40px; 
  z-Index: 2 ;
  border-Radius: 100px;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  display: grid;
  place-items: center;
`
const Text = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s ease-out 2s forwards, ${textRemove} 1s ease-in 6s forwards;
`;

const Text2 = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s steps(30, end) 6.2s forwards, ${textRemove} 1s ease-in 10.2s forwards;
`;

const Text3 = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s steps(30, end) 10.4s forwards, ${textRemove} 1s ease-in 14.4s forwards;
`;

const Text4 = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s steps(30, end) 14.6s forwards;
`;

const BrandonImg = styled.img`
  width: 80px;
  height: 80px;
  border-Radius: 1000px;
  position: absolute;
  object-fit: cover;
  opacity: 0;
  top: 55%;
  left: 50%;
  transform-origin: 0% 0%;
  animation: ${BrandonIn} 1.5s linear 1s forwards;
`;