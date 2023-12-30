import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AppName = () => {
  return (
    <>
      <Header1>모바일 환경은 준비중입니다. PC환경에서 사용해주세요</Header1>
    </>
  );
};

export default AppName;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${(props) => props.theme.Web_fontSizes.Header1};
  font-weight: ${(props) => props.theme.fontWeights.Header1};
  line-height: ${(props) => props.theme.LineHeight.Header1};
  color: ${(props) => props.theme.colors.secondary};
  font-family: "Pretendard";
`;
