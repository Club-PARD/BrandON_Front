import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Input from "./Input";

const WebChat = () => {
  const [input, setInput] = useState("");

  return (
    <Column>
      <ProgressBar />
      <div />
      <Input input={input} setInput={setInput} />
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
  justify-content: space-between;
  align-items: center;
  height: 92vh;
  padding: 13px 0;
  color: white;
`;
