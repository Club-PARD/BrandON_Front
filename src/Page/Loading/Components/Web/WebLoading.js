import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Brandon from "../../../../Assets/brandon_final.gif";
import CardAnimation from "../../../../Assets/Card_Animation.gif";
import CardAnimationBack from "../../../../Assets/Card_Animation_Back.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferMemory, ChatMessageHistory } from "langchain/memory";
import { ChatPromptTemplate, MessagesPlaceholder } from "langchain/prompts";
import { ConversationChain } from "langchain/chains";
import { AIMessage, HumanMessage } from "langchain/schema";
import { useRecoilState } from "recoil";
import { analysisPrompt } from "../../../../atom/loginAtom";

const WebLoading = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState({ init: true });
  const [chatModelResult, setChatModelResult] = useState([]);
  const [chatRoom, setChatRoom] = useState({ init: true });
  const [isLoading, setIsLoading] = useState(true);
  const userID = localStorage.getItem("userID");
  const chatRoomId = localStorage.getItem("chatRoomID");
  const [template] = useRecoilState(analysisPrompt);

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null) {
      alert("로그인이 필요합니다.");
      navigate("/");
    }
  });

  const chatModel = new ChatOpenAI({
    openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo-16k",
    temperature: 0.2,
  });

  const user = localStorage.getItem("nickname");

  const humanTemplate = "{answer}";

  const memory = new BufferMemory({
    chatHistory: new ChatMessageHistory(chatModelResult),
    memoryKey: "chat_history",
    returnMessages: true,
  });

  const chatPrompt = ChatPromptTemplate.fromMessages([
    ["system", template],
    new MessagesPlaceholder("chat_history"),
    ["human", humanTemplate],
  ]);

  const chain = new ConversationChain({
    llm: chatModel,
    prompt: chatPrompt,
    memory: memory,
  });

  const TextList = [
    "Brandon이 사용자님의 답변을 확인했어요.",
    "Brandon이 MBTI를 근거로 사용자님의 답변을 분석하고 있어요.",
    "Brandon이 FAB 형태로 사용자님의 답변을 정리하고 있어요.",
    "Brandon이 분석을 토대로 명함을 제작하고 있어요.",
  ];

  const chatButtonHandler = () => {
    navigate("/output");
  };

  useEffect(() => {
    const getRoom = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_URL + `/user/${userID}/recentChatRoom`
        );
        console.log("chatRoom:", response.data); //response.data = chatRoom
        setChatRoom(response.data);
        localStorage.setItem("chatRoomID", response.data.chatRoomId);
      } catch (error) {
        console.error("서버 요청 에러:", error);
      }
    };

    getRoom();
  }, []);

  useEffect(() => {
    if (!chatRoom.init) {
      const chatHistory = [];
      chatRoom.answers.forEach((message, i) => {
        if (i % 2 === 0) {
          chatHistory.push(new AIMessage(message));
        } else {
          chatHistory.push(new HumanMessage(message));
        }
      });
      setChatModelResult(chatHistory);
    }
  }, [chatRoom.chatRoomId]);

  useEffect(() => {
    const analysis = async () => {
      if (chatModelResult.length !== 0) {
        let message = await chain.predict({ answer: "start analysis" });
        if (message.includes("잠시만") || message.includes("기다려")) {
          message = await chain.predict({ answer: "OK" });
        }
        setIsLoading(false);
        console.log(message);
        // 앞에서부터 "{"를 찾는 인덱스
        const startIndex = message.indexOf("{");

        // 뒤에서부터 "}"를 찾는 인덱스
        const endIndex = message.lastIndexOf("}");

        if (startIndex !== -1 && endIndex !== -1 && endIndex > startIndex) {
          // "{"와 "}" 사이의 문자열 추출
          const jsonString = message.slice(startIndex, endIndex + 1).trim();

          try {
            // 추출된 JSON 문자열을 파싱
            const parsedObject = JSON.parse(jsonString);
            setResult(parsedObject);
          } catch (error) {
            console.error("JSON 파싱 오류:", error);
          }
        } else {
          console.log('"{", "}" 사이의 부분이 발견되지 않았습니다.');
        }
      }
    };

    analysis();
  }, [chatModelResult]);

  useEffect(() => {
    const chatNickName = async () => {
      if (!result.init) {
        try {
          const response = await axios.post(
            process.env.REACT_APP_URL +
              `/${userID}/${chatRoomId}/saveChatNickName`,
            { chatNickName: user },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("chatNickname:", response.data); //response.data = brandCard
        } catch (error) {
          console.error("서버 요청 에러:", error);
        }
      }
    };

    const brandCard = async () => {
      if (!result.init) {
        try {
          const response = await axios.post(
            process.env.REACT_APP_URL + `/${userID}/${chatRoomId}/brandCard`,
            {
              identity: result.Identity,
              identity_explanation: result.Identity_explanation,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("brandCard:", response.data); //response.data = brandCard
        } catch (error) {
          console.error("서버 요청 에러:", error);
        }
      }
    };

    const brandStory = async () => {
      if (!result.init) {
        try {
          const response = await axios.post(
            process.env.REACT_APP_URL + `/${userID}/${chatRoomId}/brandStory`,
            {
              identity: result.Identity,
              identityExplanation: result.Identity_explanation,
              competency: result.Competency,
              target: result.Target,
              contentsRecommendation: result.Online_Content_Recommendation,
              brandKeywords: result.Brand_Keywords,
              storyHeadlines: result.Story_headlines,
              storyContents: result.Story_contents,
              strategy: result.Strategy,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("brandStory:", response.data); //response.data = brandStory
          /* setRecoilResult({
            ...recoilResult,
            chatRooms: [
              ...recoilResult.chatRooms,
              {
                chatRoomId: parseInt(chatRoomId),
                progress: 100,
                finishChat: true,
                chatNickName: user,
                answers: chatRoom.answers,
                brandCard: {
                  identity: response.data.identity,
                  identity_explanation: response.data.identityExplanation,
                },
                brandStory: {
                  identity: response.data.identity,
                  identity_explanation: response.data.identityExplanation,
                  brandKeywords: response.data.brandKeywords,
                  storyHeadlines: response.data.storyHeadlines,
                  storyContents: response.data.storyContents,
                  competency: response.data.competency,
                  target: response.data.target,
                  contentsRecommendation: response.data.contentsRecommendation,
                },
              },
            ],
          });
          console.log({
            ...recoilResult,
            chatRooms: [
              ...recoilResult.chatRooms,
              {
                chatRoomId: parseInt(chatRoomId),
                progress: 100,
                finishChat: true,
                chatNickName: user,
                answers: chatRoom.answers,
                brandCard: {
                  identity: response.data.identity,
                  identity_explanation: response.data.identityExplanation,
                },
                brandStory: {
                  identity: response.data.identity,
                  identity_explanation: response.data.identityExplanation,
                  brandKeywords: response.data.brandKeywords,
                  storyHeadlines: response.data.storyHeadlines,
                  storyContents: response.data.storyContents,
                  competency: response.data.competency,
                  target: response.data.target,
                  contentsRecommendation: response.data.contentsRecommendation,
                },
              },
            ],
          }); */
        } catch (error) {
          console.error("서버 요청 에러:", error);
        }
      }
    };

    chatNickName();
    brandCard();
    brandStory();
  }, [result]);

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
    <Div style={{ overflow: "hidden" }}>
      <Div style={{ display: "relative" }}>
        {/* <Img src={BackgroundImg} style={{ zIndex: "0" }}></Img> */}
        {/* <Div style={{ backgroundColor: "black", opacity: "60%", position: "absolute", height: "100%", top: "0", left: "0", zIndex: "1", }}></Div> */}
        <Wrapper>
          {/* <Text key={animationKey}>{currentText}</Text> */}
          <Text>{TextList[0]}</Text>
          <Text2>{TextList[1]}</Text2>
          <Text3>{TextList[2]}</Text3>
          <Text4>{TextList[3]}</Text4>
        </Wrapper>
        <BrandonImg src={Brandon} style={{ zIndex: "3" }}></BrandonImg>
        {!isLoading && (
          <>
            <CardOverlay style={{ zIndex: "4" }}></CardOverlay>
            <CardGif src={CardAnimation} style={{ zIndex: "5" }}></CardGif>
            <CardBackImg
              src={CardAnimationBack}
              style={{ zIndex: "6" }}
            ></CardBackImg>
            <Div
              style={{
                height: "30vh",
                alignItems: "start",
                backgroundColor: "transparent",
              }}
            >
              <Div
                style={{
                  height: "5vh",
                  fontSize: "1.75rem",
                  fontWeight: "300",
                  color: "white",
                  backgroundColor: "transparent",
                  zIndex: "6",
                }}
              >
                <Button onClick={chatButtonHandler}>
                  <Div
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      color: "white",
                      fontFamily: "Pretendard Variable",
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "1.125rem",
                      lineHeight: "1.3125rem",
                      backgroundColor: "transparent",
                      zIndex: "7",
                    }}
                  >
                    눌러서 컨셉 확인하기
                  </Div>
                </Button>
              </Div>
            </Div>
          </>
        )}
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
  background-color: initial;
  color: white;
  font-size: 2.5rem;
  z-index: 2;
  border-radius: 6.25rem;
  width: 100%;
  height: 6.25rem;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  display: grid;
  place-items: center;
`;
const Text = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s ease-out 2s forwards,
    ${textRemove} 1s ease-in 6s forwards;
`;

const Text2 = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s steps(30, end) 6.2s forwards,
    ${textRemove} 1s ease-in 10.2s forwards;
`;

const Text3 = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s steps(30, end) 10.4s forwards,
    ${textRemove} 1s ease-in 14.4s forwards;
`;

const Text4 = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s steps(30, end) 14.6s forwards;
`;

const BrandonImg = styled.img`
  width: 6.625rem;
  height: 6.625rem;
  border-radius: 62.5rem;
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
  animation: ${CardIn} 1.5s linear 19s forwards,
    ${CardOut} 0.5s linear 22s forwards;
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
  left: calc(50% - 20.3125rem / 2 + 0.0313rem);
  top: 37.125rem;
  opacity: 0;
  background: #2b2d36;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 1.5854rem -1.5854rem 1.5854rem rgba(194, 194, 194, 0.1),
    inset -1.5854rem 1.5854rem 1.5854rem rgba(255, 255, 255, 0.1);
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
