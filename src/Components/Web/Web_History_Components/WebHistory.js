import React, { useState } from "react";
import styled from "styled-components";
import WebAboutFeed from "./WebHistoryFeed";
import Woochal from "../../../Assets/Woochal.png"

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
      <Div flexDirection="column" width="960px" margin="100px 0 0 0">
        <Div justifyContent="start">
          <Div width="50%" fontSize="32px" justifyContent="start" margin="0 0 40px 0">
            <A>브랜딩 히스토리</A>
          </Div>
        </Div>
        <Div display="grid" boxSizing="border-box" padding="10px" backgroundColor="#2B2D36" borderRadius="10px">

          {feeds.map((feed, index) => (
            <WebAboutFeed feedNum={feed.feedNum} imgURL={feed.imgURL} />
          ))}

        </Div>
      </Div>
    </Div >
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
  display: ${props => props.display || 'flex'};
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyContent || 'center'};
  align-items: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  margin: ${props => props.margin || '0vh 0vh 0vh 0vh'};
  padding: ${props => props.padding || '0vh 0vh 0vh 0vh'};
  background-color: ${props => props.backgroundColor || 'white'};
  /* border: ${props => props.border || '0.5px solid black'}; */
  border-radius: ${props => props.borderRadius || ''};
  box-sizing: ${props => props.boxSizing || 'content-box'};
  font-size: ${props => props.fontSize || '14px'};
  font-weight: ${props => props.fontWeight || '400'};
  /* font-family: ${props => props.fontFamily || 'AppleSDGothicNeo'}; */
  overflow: ${props => props.overflow || ''};
  grid-Template-Rows: ${props => props.gridTemplateRows || '1fr'};
  grid-Template-Columns: ${props => props.gridTemplateColumns || '1fr 1fr'};
  
`;

const A = styled.a`

`;