import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
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

  const TextListMust = [
    "안녕하세요! 저는 브랜딩 어시스턴트 Brandon이에요.",
    "저는 20년 경력이 있는 퍼스널 브랜딩 전문가로 학습됐어요.",
    "지금부터 사용자님의 답변 분석을 시작할게요.",
    "사용자님의 답변을 확인하고 있어요.",
    "사용자님의 답변을 분석중이에요.",
  ];

  const TextListRandom = [
    "과거 20년간의 퍼스널 브랜딩 분석자료들과 대조하고 있어요.",
    "전세계 퍼스널 브랜딩 전문가들에게 자문을 구하고 있어요.",
    "개성 있는 브랜드 아이덴티티를 만들어내고 있어요.",
    "흥미로운 브랜드 스토리를 구상하고 있어요.",
    "전세계의 유명인사들의 브랜딩을 노하우를 담아내고 있어요.",
    "퍼스널 브랜딩은 꾸준함이 생명이에요.",
    "퍼스널 브랜딩의 힘은 스토리에 있어요.",
    "사용자님만의 독특한 브랜드 가치를 발굴하고 있어요.",
    "사용자님의 장점을 브랜드 스토리에 통합하고 있어요.",
    "시장 트렌드와 사용자님의 브랜드를 매칭 중이에요.",
    "사용자님의 브랜드가 돋보일 수 있는 전략을 수립하고 있어요.",
    "사용자님의 브랜드를 잘 나타낼 수 있는 키워드를 생성하고 있어요.",
    "사용자님의 브랜드가 강력한 영향력을 발휘할 수 있도록 준비 중이에요.",
    "인상적인 브랜드 메시지를 작성 중이에요.",
    "사용자님의 브랜드에 알맞는 카드 디자인을 선택 중이에요.",
    "브랜드 인지도를 높이기 위한 전략을 마련 중이에요.",
    "사용자님의 경험과 성과를 브랜드 스토리로 변환하고 있어요.",
    "브랜드의 지속 가능한 성장을 위한 전략적 계획을 수립 중이에요.",
    "사용자님의 역량을 파악하는 중이에요.",
    "사용자님의 브랜드가 목표 타겟에게 어떻게 인식될지 분석 중이에요.",
    "타겟 청중 분석을 통해 사용자님의 브랜드 포지셔닝을 최적화하고 있어요.",
    "사용자님의 개인 경험을 브랜드 스토리로 전환하고 있어요.",
    "글로벌 브랜드 트렌드를 분석하여 사용자님의 브랜드를 조정하고 있어요.",
    "사용자님의 브랜드 이야기를 위한 특별한 향신료를 찾아내는 중이에요.",
    "사용자님의 브랜드 생성을 위해 소셜 미디어를 탐험 중이에요.",
    "사용자님의 경험에서 숨겨진 보석같은 브랜드를 발굴하고 있어요.",
    "사용자님의 브랜드를 빛나게 다듬고 있어요.",
    "브랜드의 퍼즐 조각을 맞추며 완벽한 그림을 그리고 있어요.",
    "사용자님의 브랜드 정체성에 풍부한 색채를 더하고 있어요.",
  ]

  const lastText = "거의 다 완성되었어요! 조금만 기다려 주세요."


  const [currentText, setCurrentText] = useState('');
  const [TextListRandomMixed, setTextListRandomMixed] = useState([...TextListRandom]);

  useEffect(() => {

    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    const shuffledArray = [...TextListRandom];

    shuffleArray(shuffledArray);

    setTextListRandomMixed(shuffledArray);
  }, []);
  console.log(TextListRandomMixed);


  // useEffect(() => {

  //   const selectRandomText = () => {
  //     const randomIndex = Math.floor(Math.random() * TextListRandom.length);
  //     setCurrentText(TextListRandom[randomIndex]);
  //   };


  //   const interval = setInterval(selectRandomText, 5000);


  //   selectRandomText();


  //   return () => clearInterval(interval);
  // }, []);

  // console.log(currentText);

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
                  strategy: response.data.strategy,
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
                  strategy: response.data.strategy,
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
        <Wrapper>
          {TextListMust.map((text, index) => (
            <Text key={text} delay1={2 + 5.5 * index} delay2={7 + 5.5 * index}>{text}</Text>
          ))}
          {TextListRandomMixed.map((text, index) => (
            <Text key={text} delay1={29.5 + 5.5 * index} delay2={34.5 + 5.5 * index}>{text}</Text>
          ))}
          <Alert>
            Brandon이 분석하는데 약 3분 이상의 시간이 소요될 수 있습니다.
          </Alert>
          <Text4>{lastText}</Text4>
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

const apper = keyframes` 
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
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

  65% {
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
  animation: ${lineUp} 2s ease-out ${props => props.delay1}s forwards, ${textRemove} 1s ease-in ${props => props.delay2}s forwards;
`;

const Text4 = styled.div`
  position: absolute;
  opacity: 0;
  animation: ${lineUp} 2s ease-out 188.5s forwards;
`;

const Alert = styled.div`
  position: absolute;
  font-size: 0.9375rem;
  color: #aaaaaa;
  top: 100%;
  opacity: 0;
  animation: ${apper} 5s ease-out 0.5s forwards;
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
  animation: ${CardOverlayIn} 0.5s linear forwards;
`;

const CardGif = styled.img`
  width: 60rem;
  position: absolute;
  object-fit: cover;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform-origin: 0% 0%;
  animation: ${CardIn} 1.5s linear 0.5s forwards,
    ${CardOut} 0.5s linear 3.5s forwards;
`;

const CardBackImg = styled.img`
  width: 40.125rem;
  position: absolute;
  object-fit: cover;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${CardBackIn} 0.5s linear 4.5s forwards;
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
  animation: ${ButtonIn} 0.5s linear 4.5s forwards;
`;
