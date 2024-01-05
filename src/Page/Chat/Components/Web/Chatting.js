import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Brandon from "../../../../Assets/brandon_final.gif";

const Chatting = ({ chatMessage, isLoading, preInput }) => {
  const chatRef = useRef(null);

  const TextList = [
    "답변을 확인했어요!",
    "답변을 분석하고 있어요.",
    "질문을 생성하고 있어요.",
  ];

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatMessage, isLoading, preInput]);

  return (
    <Column ref={chatRef}>
      {chatMessage.map((chat, i) => {
        if (i % 2 === 0) {
          return (
            <>
              <LeftRow>
                <ChatContainerBrandon>
                  <ChatName>
                    <BrandonImg src={Brandon} alt="브랜든 이미지"></BrandonImg>
                    <div style={{ width: "0.625rem" }} />
                    <Body4>
                      브랜딩 어시스턴트 <b>Brandon</b>
                    </Body4>
                  </ChatName>
                  <div style={{ height: "0.625rem" }} />
                  <ChatBubbleBrandon>
                    <Text>{chat}</Text>
                  </ChatBubbleBrandon>
                </ChatContainerBrandon>
              </LeftRow>
            </>
          );
        } else {
          return (
            <RightRow>
              <ChatBubbleUser>
                <Text>{chat}</Text>
              </ChatBubbleUser>
            </RightRow>
          );
        }
      })}
      {isLoading && chatMessage.length > 0 ? (
        <>
          <RightRow>
            <ChatBubbleUser>
              <Text>{preInput}</Text>
            </ChatBubbleUser>
          </RightRow>
          <LeftRow>
            <ChatContainerBrandon>
              <ChatName>
                <BrandonImg src={Brandon} alt="브랜든 이미지"></BrandonImg>
                <div style={{ width: "0.625rem" }} />
                <Body4>
                  브랜딩 어시스턴트 <b>Brandon</b>
                </Body4>
              </ChatName>
              <div style={{ height: "0.625rem" }} />
              <ChatBubbleBrandon style={{ padding: "2.3125rem 1.5rem" }}>
                <UxWriting1>{TextList[0]}</UxWriting1>
                <UxWriting2>{TextList[1]}</UxWriting2>
                <UxWriting3>{TextList[2]}</UxWriting3>
              </ChatBubbleBrandon>
            </ChatContainerBrandon>
          </LeftRow>
        </>
      ) : null}
      {isLoading && chatMessage.length === 0 ? (
        <LeftRow>
          <ChatContainerBrandon>
            <ChatName>
              <BrandonImg src={Brandon} alt="브랜든 이미지"></BrandonImg>
              <div style={{ width: "0.625rem" }} />
              <Body4>
                브랜딩 어시스턴트 <b>Brandon</b>
              </Body4>
            </ChatName>
            <div style={{ height: "0.625rem" }} />
            <ChatBubbleBrandon>
              로딩 중이에요. 잠시만 기다려주세요!
            </ChatBubbleBrandon>
          </ChatContainerBrandon>
        </LeftRow>
      ) : null}
    </Column>
  );
};

export default Chatting;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 56.25rem;
  padding: 3.5rem 0 0 0;
  min-height: 60vh;
  height: calc(100% + 3.5rem);
  color: white;
  overflow-y: scroll;
  z-index: 10;

  ::-webkit-scrollbar {
    display: none; /* 스크롤 바의 배경 색상 (투명으로 설정하여 숨김) */
  }
`;

const ChatContainerBrandon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ChatName = styled.div`
  display: flex;
  align-items: center;
`;

const LeftRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 300%;
`;

const RightRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 300%;
`;

const BrandonIn = keyframes` 
  0% {
    transform: scale(0);
  }

  25% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  35% {
    transform: scale(1);
  }

  100% {
    opacity: 1;
  }
`;

const BrandonImg = styled.img`
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  object-fit: cover;
  animation: ${BrandonIn} 1.5s linear 1s forwards;
`;

// theme 파일 폰트 적용 방법 + style-components 사용
const Body4 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body4};
  font-weight: ${({ theme }) => theme.fontWeights.Body4};
  line-height: ${({ theme }) => theme.LineHeight.Body4};
  font-family: "Pretendard";
`;

const ChatBubbleBrandon = styled.div`
  max-width: 48.75rem;
  min-width: 12.5rem;
  padding: 1.5rem;
  border-radius: 0 0.625rem 0.625rem 0.625rem;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(calc(var(--text-field-blur, 6.25rem) / 2));
  font-weight: 300;
`;

const ChatBubbleUser = styled.div`
  max-width: 48.75rem;
  padding: 1.5rem;
  margin: 3.125rem 0;
  border-radius: 0.625rem 0.625rem 0 0.625rem;
  background: var(--ver-2-text-field, rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(3.125rem);
  font-weight: 400;
`;

const Text = styled.pre`
  all: unset;
  white-space: pre-wrap;
  font-family: "Pretendard";
  line-height: 1.7;
`;

const fadeIn = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const out = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const UxWriting1 = styled.div`
  margin-top: -10px;
  opacity: 0;
  animation: ${fadeIn} 2s ease-in-out 0s forwards, ${out} 0s linear 4s forwards;
  position: absolute;
`;

const UxWriting2 = styled.div`
  margin-top: -10px;
  opacity: 0;
  animation: ${fadeIn} 2s steps(30, end) 4.2s forwards,
    ${out} 0s linear 8s forwards;
  position: absolute;
`;

const UxWriting3 = styled.div`
  margin-top: -10px;
  opacity: 0;
  animation: ${fadeIn} 2s steps(30, end) 8.4s forwards;
  position: absolute;
`;
