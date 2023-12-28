import React, { useState } from "react";
import styled from "styled-components";
import WebHistoryFeed from "./WebHistoryFeed";
import Woochal from "../../../../Assets/Woochal.png";

const WebHistory = () => {
  const [feeds, setFeeds] = useState([
    {
      feedNum: 1,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },
    {
      feedNum: 1,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },
    {
      feedNum: 1,
      imgURL: Woochal,
      brandCard: {
        name: "박우찰",
        brandConcept: "혁신적인 백수",
        conceptDetail: "방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람."
      },
      brandStory: {
        storytelling: "",
        resources: "",
        slogan: "",
        suggestion: "",
        niche: "",
      },
    },
  ]);
  return (
    <Div>
      <Div
        style={{
          flexDirection: "column",
          width: "940px",
          margin: "100px 0 0 0",
        }}
      >
        <Div style={{}}>
          <Div
            style={{
              fontSize: "250px",
              fontWeight: "bold",
              margin: "0 0 40px 0",
            }}
          >
            <A>Output</A>
          </Div>
        </Div>
        <Div
          style={{
            display: "grid",
            boxSizing: "border-box",
            borderRadius: "10px",
            gridGap: "30px 40px",
          }}
        >
          {feeds.map((feed, index) => (
            <WebHistoryFeed feedNum={feed.feedNum} imgURL={feed.imgURL} brandCard={feed.brandCard} brandConcept={feed.brandConcept} />
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
  border: 0.5px solid black;
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

const A = styled.a`
  color: white;
  mix-blend-mode: soft-light;
  letter-Spacing: -10px
`;
