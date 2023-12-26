import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppChat = () => {
  return (
    <>
      <Header1>채팅 모바일 페이지</Header1>
      <Link to="/">홈 페이지</Link>
    </>
  );
};

export default AppChat;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.primary};
  font-family: "Pretendard";
`;
