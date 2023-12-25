import React from "react";
import styled from "styled-components";

const WebAbout = () => {
  return (
    <>
      <Header1>소개 웹 페이지</Header1>
    </>
  );
};

export default WebAbout;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  color: ${({ theme }) => theme.colors.secondary};
  font-family: "Pretendard";
`;
