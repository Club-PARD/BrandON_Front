import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppLoading = () => {
  return (
    <>
      <Header1>소개 모바일 페이지</Header1>
      <Link to="/">홈 페이지</Link>
    </>
  );
};

export default AppLoading;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Pretendard";
`;
