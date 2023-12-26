import React, { useState } from "react";
import styled from "styled-components";
import WebAboutFeed from "./WebHistoryFeed";
import Woochal from "../../../../Assets/Woochal.png";

const WebHistory = () => {
  const [feeds, setFeeds] = useState([
    {
      feedNum: 1,
      imgURL: Woochal,
    },
    {
      feedNum: 2,
      imgURL: "",
    },
    {
      feedNum: 3,
      imgURL: "",
    },
    {
      feedNum: 4,
      imgURL: "",
    },
    {
      feedNum: 5,
      imgURL: "",
    },
  ]);
  return (
    <Div>
      <Div
        style={{
          flexDirection: "column",
          width: "960px",
          margin: "100px 0 0 0",
        }}
      >
        <Div style={{ justifyContent: "start" }}>
          <Div
            style={{
              width: "50%",
              fontSize: "32px",
              justifyContent: "start",
              margin: "0 0 40px 0",
            }}
          >
            <A>브랜딩 히스토리</A>
          </Div>
        </Div>
        <Div
          style={{
            display: "grid",
            boxSizing: "border-box",
            padding: "10px",
            backgroundColor: "#2B2D36",
            borderRadius: "10px",
          }}
        >
          {feeds.map((feed, index) => (
            <WebAboutFeed feedNum={feed.feedNum} imgURL={feed.imgURL} />
          ))}
        </Div>
      </Div>
    </Div>
  );
};

export default WebHistory;

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
  background-color: white;
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
`;

const A = styled.a``;
