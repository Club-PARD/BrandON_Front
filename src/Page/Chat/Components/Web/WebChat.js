import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Input from "./Input";

const WebChat = () => {
  return (
    <Column>
      <ProgressBar />
      <div style={{ flex: 1 }} />
      <Input />
    </Column>
  );
};

export default WebChat;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: "Pretendard";
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
