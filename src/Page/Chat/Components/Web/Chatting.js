import React from "react";
import styled, { keyframes } from "styled-components";
import Brandon from "../../../../Assets/brandon_final.gif";

const Chatting = ({ chatModelResult }) => {
  return (
    <Column>
      {chatModelResult.map((chat, i) => {
        if (i % 2 == 0) {
          return (
            <>
              <Row>
                <ChatContainerBrandon>
                  <ChatName>
                    <BrandonImg src={Brandon} alt="브랜든 이미지"></BrandonImg>
                    <div style={{ width: "10px" }} />
                    <Body4>
                      브랜딩 어시스턴트 <b>Brandon</b>
                    </Body4>
                  </ChatName>
                  <div style={{ height: "10px" }} />
                  <ChatBubbleBrandon>{chat.content}</ChatBubbleBrandon>
                </ChatContainerBrandon>
              </Row>
              <div style={{ height: "50px" }} />
            </>
          );
        } else {
          return (
            <>
              <ChatBubbleUser>{chat.content}</ChatBubbleUser>
            </>
          );
        }
      })}
    </Column>
  );
};

export default Chatting;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  padding: 50px 0;
  height: 100%;
  color: white;
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
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

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
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
  width: 30px;
  height: 30px;
  border-radius: 30px;
  object-fit: cover;
  animation: ${BrandonIn} 1.5s linear 1s forwards;
`;

// theme 파일 폰트 적용 방법 + style-components 사용
const Body4 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body4};
  font-weight: ${({ theme }) => theme.fontWeights.Body4};
  line-height: ${({ theme }) => theme.LineHeight.Body4};
  color: white;
`;

const ChatBubbleBrandon = styled.div`
  width: 785px;
  padding: 24px;
  border-radius: 0px 10px 10px 10px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(calc(var(--text-field-blur, 100px) / 2));
`;

const ChatBubbleUser = styled.div`
  width: 785px;
  padding: 24px;
  border-radius: 10px 10px 0px 10px;
  background: var(--ver-2-text-field, rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(50px);
`;
