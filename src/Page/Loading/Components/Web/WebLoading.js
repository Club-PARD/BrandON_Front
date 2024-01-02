import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import BackgroundImg from "../../../../Assets/Loading_Background.jpg"
import Brandon from "../../../../Assets/brandon_final.gif"
import CardAnimation from "../../../../Assets/Card_Animation.gif"
import CardAnimationBack from "../../../../Assets/Card_Animation_Back.png"
import { useNavigate } from "react-router-dom";

const WebLoading = () => {

  document.body.style.overflow = "hidden";

  const TextList = [
    "Brandon이 사용자님의 답변을 확인했어요.",
    "Brandon이 MBTI를 근거로 사용자님의 답변을 분석하고 있어요.",
    "Brandon이 FAB 형태로 사용자님의 답변을 정리하고 있어요.",
    "Brandon이 분석을 토대로 명함을 제작하고 있어요.",
  ]

  const navigate = useNavigate();
  const chatButtonHandler = () => {
    navigate("/output");
  }

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
        {/* <Img src={BackgroundImg} style={{ zIndex: "0" }}></Img> */}
        {/* <Div style={{ backgroundColor: "black", opacity: "60%", position: "absolute", height: "100%", top: "0", left: "0", zIndex: "1", }}></Div> */}
        <Wrapper>
          {/* <Text key={animationKey}>{currentText}</Text> */}
          <Text >{TextList[0]}</Text>
          <Text2 >{TextList[1]}</Text2>
          <Text3 >{TextList[2]}</Text3>
          <Text4 >{TextList[3]}</Text4>
        </Wrapper>
        <BrandonImg src={Brandon} style={{ zIndex: "3" }}></BrandonImg>
        <CardOverlay style={{ zIndex: "4" }}></CardOverlay>
        <CardGif src={CardAnimation} style={{ zIndex: "5" }}></CardGif>
        <CardBackImg src={CardAnimationBack} style={{ zIndex: "6" }}></CardBackImg>
        <Div style={{ height: "30vh", alignItems: "start", backgroundColor: "transparent" }}>
          <Div style={{ height: "5vh", fontSize: "1.75rem", fontWeight: "300", color: "white", backgroundColor: "transparent", zIndex: "6" }}>
            <Button onClick={chatButtonHandler}>
              <Div style={{ width: "100%", justifyContent: "center", color: "white", fontFamily: "Pretendard Variable", fontStyle: "normal", fontWeight: "700", fontSize: "1.125rem", lineHeight: "1.3125rem", backgroundColor: "transparent", zIndex: "7" }}>눌러서 컨셉 확인하기</Div>
            </Button>
          </Div>
        </Div>

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
  /* background-color: transparent; */
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

const CardIn = keyframes` 
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

const CardOut = keyframes` 
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

const CardOverlayIn = keyframes` 
  0% {
    opacity: 0;
  }

  100% {
    opacity: 0.9;
  }
`;

const CardBackIn = keyframes` 
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const ButtonIn = keyframes` 
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
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
  font-Size: 2.5rem; 
  z-Index: 2 ;
  border-Radius: 6.25rem;
  width: 100%;
  height: 6.25rem;
  position: absolute;
  top: 40%;
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
  width: 6.625rem;
  height: 6.625rem;
  border-Radius: 62.5rem;
  position: absolute;
  object-fit: cover;
  opacity: 0;
  top: 57%;
  left: 50%;
  transform-origin: 0% 0%;
  animation: ${BrandonIn} 1.5s linear 1s forwards;
`;


const CardOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  object-fit: cover;
  background-color: black;
  opacity: 0;
  animation: ${CardOverlayIn} 0.5s linear 18.6s forwards;
`;

const CardGif = styled.img`
  width: 60rem;
  position: absolute;
  object-fit: cover;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform-origin: 0% 0%;
  animation: ${CardIn} 1.5s linear 19s forwards, ${CardOut} 0.5s linear 22s forwards;
`;

const CardBackImg = styled.img`
  width: 40.125rem;
  position: absolute;
  object-fit: cover;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${CardBackIn} 0.5s linear 23s forwards; 
`;

const Button = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: 20.3125rem;
  height: 3.1875rem;
  left: calc(50% - 20.3125rem/2 + 0.0313rem);
  top: 37.125rem;
  opacity:0;
  background: #2B2D36;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 1.5854rem -1.5854rem 1.5854rem rgba(194, 194, 194, 0.1), inset -1.5854rem 1.5854rem 1.5854rem rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.5854rem);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 1.25rem;

  display: flex;

  &:hover {
      cursor: pointer;
      background: rgba(255, 255, 255, 0.1);
    }
  animation: ${ButtonIn} 0.5s linear 23s forwards; 
`;