import React from "react";
import styled from "styled-components";

const WebChat = () => {
  return (
    <>
      <Header1>채팅 웹 페이지</Header1>
    </>
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
