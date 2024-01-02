import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Woochal from "../../../../Assets/Woochal.png";
import ButtonCard from "../../../../Assets/Arrow.png";
import StoryImg from "../../../../Assets/Story_Img.png"
import { useNavigate } from "react-router-dom";
import WoochalDead from "../../../../Assets/Woochal_Dead.png";
import CardDefault from "../../../../Assets/Card_Default.png";
import html2canvas from 'html2canvas';
import axios from "axios";
import { useRecoilState } from "recoil";
import { recoilUserAllResults, } from "../../../../atom/loginAtom";
import Brandon from "../../../../Assets/brandon_final.gif";
import CardWhite from "../../../../Assets/Card_White.png";
import CardBlue from "../../../../Assets/Card_Blue.png";
import CardPurple from "../../../../Assets/Card_Purple.png";
import CardPink from "../../../../Assets/Card_Pink.png";

const WebOutput = () => {

  const [userData, setUserData] = useRecoilState(recoilUserAllResults);
  const [chatroom, setChatroom] = useState([]);
  const getChatroomData = async () => {
    try {
      const userID = localStorage.getItem("userID");
      const chatRoomId = localStorage.getItem("chatRoomId");
      const data = await axios.get(`${process.env.REACT_APP_URL}/${userID}/${chatRoomId}/myResult`)
      console.log(data.data);
      setChatroom(data.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  const chatRoomIdS = localStorage.getItem("chatRoomId");

  console.log(userData);
  console.log(chatroom);
  console.log(chatRoomIdS);

  useEffect(() => {
    for (let i = 0; i < userData.chatRooms.length; i++) {
      if (userData.chatRooms[i].chatRoomId == chatRoomIdS) {
        setChatroom(userData.chatRooms[i]);
      }
    }
  }, [userData])

  const navigate = useNavigate();
  const [toggle, setToggle] = useState(1);

  const identityToggleHandler = () => {
    setToggle(1);
  }
  const storyToggleHandler = () => {
    setToggle(2);
  }
  const chatToggleHandler = () => {
    setToggle(3);
  }

  const downloadHandler = () => {
    const element = document.getElementById('Card');
    if (element instanceof HTMLElement) {
      html2canvas(element).then((canvas) => {
        onSaveAs(canvas.toDataURL('image/png'), 'card.png');
      });
    }
  };

  const onSaveAs = (uri, filename) => {
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = uri;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  };

  const arrowHandler = () => {
    navigate("/history")
  }
  const ImgList = [CardWhite, CardPink, CardPurple, CardBlue];

  return (
    <Div>
      {{
        1:
          <Div style={{}}>
            <Div style={{ width: "20%", height: "90vh", justifyContent: "start", alignItems: "start" }}>
              <Div style={{ width: "20%", height: "10%", justifyContent: "start", alignItems: "start", margin: "3.875rem 0 0 7.1875rem" }}>
                <ArrowImg src={ButtonCard} style={{ margin: "0 0 0 0" }} onClick={arrowHandler} />
              </Div>
            </Div>
            <Div style={{ width: "60%", height: "90vh", alignItems: "start" }}>
              <Div style={{ flexDirection: "column", width: "41.875rem", height: "39.375rem", background: "", borderRadius: "1.25rem", margin: "1.5625rem 0 0 0" }}>
                <Div style={{ height: "15%", alignItems: "start" }}>
                  <Div style={{ width: "40.375rem", height: "3.75rem", background: "#D9D9D9", borderRadius: "6.25rem", justifyContent: "space-between", margin: "1.4375rem 0 0 0", padding: "0 0.5rem 0 0.5rem", boxSizing: "border-box" }}>
                    <Concept onClick={identityToggleHandler} style={{ width: "33%", height: "3.1875rem", margin: "0 0 0 0", background: "#ffffff", borderRadius: "1.875rem", boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)", fontSize: "1.25rem", fontWeight: "600" }}>
                      아이덴티티
                    </Concept>
                    <Story onClick={storyToggleHandler} style={{ width: "34%" }}>
                      <Div style={{ width: "100%", fontSize: "1.25rem", fontWeight: "600", color: "#ABABAB", justifyContent: "center", margin: "0 0 0 0" }}>스토리</Div>
                    </Story>
                    <Chat onClick={chatToggleHandler} style={{ width: "33%" }}>
                      <Div style={{ width: "100%", fontSize: "1.25rem", fontWeight: "600", color: "#ABABAB", justifyContent: "end", margin: "0 4.3125rem 0 0" }}>채팅 기록</Div>
                    </Chat>
                  </Div>
                </Div>
                <Div style={{ height: "60%", alignItems: "end", }}>
                  <Card id="Card"
                    style={{
                      display: "block",
                      width: "28.125rem",
                      height: "15.625rem",
                      fontSize: "2rem",
                      margin: "1.875rem 0 0.5rem 0",
                    }}
                  >
                    <Div style={{ display: "block", position: "relative" }}>
                      <Div style={{
                        position: "absolute",
                        backgroundColor: "none",
                        opacity: 1,
                        top: "0",
                        left: "0",
                        zIndex: "3",
                      }}
                      >
                        <Div style={{ width: "55.6%" }}></Div>
                        <Div style={{ flexDirection: "column", width: "44.4%" }}>
                          <Div style={{ alignItems: "end", padding: "0rem 0.875rem 0rem 0.875rem", height: "40%", boxSizing: "border-box" }}>
                            <Div style={{ fontSize: "1.5rem", fontWeight: "600", justifyContent: "start", alignItems: "bottom", height: "20%" }}>
                              {chatroom?.chatNickName}
                            </Div>
                          </Div>
                          <Div style={{ alignItems: "center", padding: "0.4rem 0.875rem 0rem 0.875rem", height: "10%", boxSizing: "border-box" }}>
                            <Div style={{ fontSize: "0.875rem", fontWeight: "500", justifyContent: "start", alignItems: "bottom", height: "100%" }}>
                              {chatroom?.brandCard?.identity || ""}
                            </Div>
                          </Div>
                          <Div style={{ alignItems: "start", padding: "1rem 0.875rem 0rem 0.875rem", height: "25%", boxSizing: "border-box" }}>
                            <Div style={{ fontSize: "0.625rem", fontWeight: "400", justifyContent: "start", alignItems: "start", height: "80%", lineHeight: "125%" }}>
                              {chatroom?.brandCard?.identity_explanation || ""}
                            </Div>
                          </Div>
                          <Div style={{ alignItems: "start", padding: "0rem 0.875rem 0rem 0.875rem", height: "25%", boxSizing: "border-box" }}>
                            <Div style={{ height: "80%", lineHeight: "125%", justifyContent: "start" }}>
                              <Div style={{ width: "fit-content", fontSize: "0.5rem", fontWeight: "600", justifyContent: "start", alignItems: "start", margin: "0 0.625rem 0 0" }}>{"#" + chatroom?.brandStory?.brandKeywords[0]}</Div>
                              <Div style={{ width: "fit-content", fontSize: "0.5rem", fontWeight: "600", justifyContent: "start", alignItems: "start", margin: "0 0.625rem 0 0" }}>{"#" + chatroom?.brandStory?.brandKeywords[1]}</Div>
                              <Div style={{ width: "fit-content", fontSize: "0.5rem", fontWeight: "600", justifyContent: "start", alignItems: "start", margin: "0 0.625rem 0 0" }}>{"#" + chatroom?.brandStory?.brandKeywords[2]}</Div>
                            </Div>
                          </Div>
                        </Div>
                      </Div>

                      {<Img src={ImgList[(chatroom.chatRoomId - 1) % 4]}></Img>}
                    </Div>
                  </Card>
                </Div>
                <Div style={{ height: "25%", alignItems: "start" }}>
                  <Download onClick={downloadHandler} style={{ fontSize: "1.25rem", fontWeight: "600", margin: "1.9375rem 0 0 0" }}>
                    다운로드
                  </Download>
                </Div>
              </Div>
            </Div>
            <Div style={{ width: "20%", height: "90vh" }}>

            </Div>
          </Div>
        ,
        2:
          <Div style={{ height: "", justifyContent: "start", alignItems: "start" }}>
            <Div style={{ width: "10%", height: "90vh", justifyContent: "start", alignItems: "start" }}>
              <Div style={{ width: "20%", height: "10%", justifyContent: "start", alignItems: "start", margin: "3.875rem 0 0 7.1875rem" }}>
                <ArrowImg src={ButtonCard} style={{ margin: "0 0 0 0" }} onClick={arrowHandler} />
              </Div>
            </Div>
            <Div style={{ width: "80%", height: "", alignItems: "start" }}>
              <Div style={{ flexDirection: "column", width: "100%", borderRadius: "1.25rem", margin: "1.5625rem 0 0 0" }}>
                <Div style={{ height: "15%", alignItems: "start" }}>
                  <Div style={{ width: "40.375rem", height: "3.75rem", background: "#D9D9D9", borderRadius: "6.25rem", justifyContent: "space-between", margin: "1.4375rem 0 0 0", padding: "0 0.5rem 0 0.5rem", boxSizing: "border-box" }}>
                    <Concept onClick={identityToggleHandler} style={{ width: "33%" }}>
                      <Div style={{ width: "100%", fontSize: "1.25rem", fontWeight: "600", color: "#ABABAB", justifyContent: "start", margin: "0 0 0 3.875rem " }}>아이덴티티</Div>
                    </Concept>
                    <Story onClick={storyToggleHandler} style={{ width: "34%", height: "3.1875rem", margin: "0 0 0 0", background: "#ffffff", borderRadius: "1.875rem", boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)", fontSize: "1.25rem", fontWeight: "600" }}>스토리
                    </Story>
                    <Chat onClick={chatToggleHandler} style={{ width: "33%" }}>
                      <Div style={{ width: "100%", fontSize: "1.25rem", fontWeight: "600", color: "#ABABAB", justifyContent: "end", margin: "0 4.3125rem 0 0" }}>채팅 기록</Div>
                    </Chat>
                  </Div>
                </Div>
                <Div style={{ height: "70%", margin: "4.375rem 0 4.375rem 0" }}>
                  <Div style={{ flexDirection: "column", width: "100%", background: "rgba(0, 0, 0, 0.4)", borderRadius: "2.5rem", padding: "5.9375rem 7.1875rem 5.9375rem 7.1875rem", boxSizing: "border-box" }}>
                    <Div style={{ width: "100%", alignItems: "start" }}>
                      <Div style={{ width: "60%", flexDirection: "column", }}>
                        <Div style={{ height: "30%", color: "white", justifyContent: "start", alignItems: "center", padding: "1rem 0 2rem 0" }}>
                          <Div style={{ justifyContent: "start", fontSize: "3rem", fontWeight: "600" }}>{chatroom?.chatNickName || ""}</Div>
                        </Div>
                        <Div style={{ height: "20%", color: "white", justifyContent: "start", fontSize: "1.75rem", fontWeight: "600", padding: "0 0 2.5rem 0" }}>{chatroom?.brandCard?.identity || ""}</Div>
                        <Div style={{ height: "50%", color: "#C9C9C9", justifyContent: "start", fontSize: "1.25rem" }}>마케팅에 대한 깊은 열정과 사회적 {chatroom?.brandCard?.identity_explanation || ""}
                        </Div>
                      </Div>
                      <Div style={{ width: "40%", justifyContent: "end", }}>
                        <StoryImgTag src={StoryImg} />
                      </Div>
                    </Div>
                    <Hr />
                    <Div style={{ height: "100%", flexDirection: "column" }}>
                      <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>브랜드 키워드</Div>
                      <Div style={{ alignItems: "start" }}>
                        <Div style={{ height: "100%", flexDirection: "column", justifyContent: "space-between" }}>
                          <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>{chatroom?.brandStory?.brandKeywords[0] || ""}</Div>
                          <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>{chatroom?.brandStory?.brandKeywords[3] || ""}</Div>
                        </Div>
                        <Div style={{ height: "100%", flexDirection: "column", justifyContent: "start" }}>
                          <Div style={{ justifyContent: "center", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>{chatroom?.brandStory?.brandKeywords[1] || ""}</Div>
                          <Div style={{ justifyContent: "center", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>{chatroom?.brandStory?.brandKeywords[4] || ""}</Div>
                        </Div>
                        <Div style={{ height: "100%", flexDirection: "column" }}>
                          <Div style={{ justifyContent: "end", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>{chatroom?.brandStory?.brandKeywords[2] || ""}</Div>
                          <Div style={{ justifyContent: "end", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>{chatroom?.brandStory?.brandKeywords[5] || ""}</Div>
                        </Div>
                      </Div>
                    </Div>
                    <Hr />
                    <Div style={{ height: "100%", flexDirection: "column" }}>
                      <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>브랜드 스토리</Div>
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div style={{ height: "100%", flexDirection: "column" }}>
                          <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>{chatroom?.brandStory?.storyTitles[0] || ""}</Div>
                          <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem", margin: "0 0 2.5rem 0" }}>{chatroom?.brandStory?.storyTexts[0] || ""}</Div>
                        </Div>
                        <Div style={{ height: "100%", flexDirection: "column" }}>
                          <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>{chatroom?.brandStory?.storyTitles[1] || ""}</Div>
                          <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem", margin: "0 0 2.5rem 0" }}>{chatroom?.brandStory?.storyTexts[1] || ""}</Div>
                        </Div>
                        <Div style={{ height: "100%", flexDirection: "column" }}>
                          <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>{chatroom?.brandStory?.storyTitles[2] || ""}</Div>
                          <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem" }}>{chatroom?.brandStory?.storyTexts[2] || ""}</Div>
                        </Div>
                      </Div>
                    </Div>
                    <Hr />
                    <Div style={{ height: "100%", flexDirection: "column" }}>
                      <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>브랜드 역량</Div>
                      <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem", width: "" }}>{chatroom?.brandStory?.resources || ""}
                      </Div>
                    </Div>
                    <Hr />
                    <Div style={{ height: "100%", flexDirection: "column" }}>
                      <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>브랜드 타겟</Div>
                      <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem" }}>{chatroom?.brandStory?.target || ""}
                      </Div>
                    </Div>
                    <Hr />
                    <Div style={{ height: "100%", flexDirection: "column" }}>
                      <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>온라인 콘텐츠 추천 방향</Div>
                      <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem" }}>{chatroom?.brandStory?.suggestions || ""}
                      </Div>
                    </Div>
                  </Div>
                </Div>
                <Div style={{ height: "15%", alignItems: "end" }}>
                  <Download onClick={downloadHandler} style={{ fontSize: "1.25rem", fontWeight: "600", margin: "0 0 1.9375rem 0" }}>
                    다운로드
                  </Download>
                </Div>
              </Div>
            </Div>
            <Div style={{ width: "10%", height: "90vh" }}>
            </Div>
          </Div>
        ,
        3:
          <Div style={{ height: "", justifyContent: "start", alignItems: "start" }}>
            <Div style={{ width: "10%", height: "90vh", justifyContent: "start", alignItems: "start" }}>
              <Div style={{ width: "20%", height: "10%", justifyContent: "start", alignItems: "start", margin: "3.875rem 0 0 7.1875rem" }}>
                <ArrowImg src={ButtonCard} style={{ margin: "0 0 0 0" }} onClick={arrowHandler} />
              </Div>
            </Div>
            <Div style={{ width: "80%", height: "", alignItems: "start" }}>
              <Div style={{ flexDirection: "column", width: "100%", borderRadius: "1.25rem", margin: "1.5625rem 0 0 0" }}>
                <Div style={{ height: "15%", alignItems: "start" }}>
                  <Div style={{ width: "40.375rem", height: "3.75rem", background: "#D9D9D9", borderRadius: "6.25rem", justifyContent: "space-between", margin: "1.4375rem 0 0 0", padding: "0 0.5rem 0 0.5rem", boxSizing: "border-box" }}>
                    <Concept onClick={identityToggleHandler} style={{ width: "33%" }}>
                      <Div style={{ width: "100%", fontSize: "1.25rem", fontWeight: "600", color: "#ABABAB", justifyContent: "start", margin: "0 0 0 3.875rem" }}>아이덴티티</Div>
                    </Concept>
                    <Story onClick={storyToggleHandler} style={{ width: "34%" }}>
                      <Div style={{ width: "100%", fontSize: "1.25rem", fontWeight: "600", color: "#ABABAB", justifyContent: "center", margin: "0 0 0 0" }}>스토리</Div>
                    </Story>
                    <Chat onClick={chatToggleHandler} style={{ width: "33%", height: "3.1875rem", margin: "0 0 0 0", background: "#ffffff", borderRadius: "1.875rem", boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)", fontSize: "1.25rem", fontWeight: "600" }}>
                      채팅 기록
                    </Chat>
                  </Div>
                </Div>
                <Div style={{ height: "70%", margin: "4.375rem 0 4.375rem 0" }}>
                  <Div style={{ flexDirection: "column", width: "100%", background: "rgba(0, 0, 0, 0.2)", borderRadius: "2.5rem", padding: "5.9375rem 7.1875rem 5.9375rem 7.1875rem", boxSizing: "border-box" }}>
                    <Div>
                      <ChatContainerBrandon>
                        <ChatName>
                          <BrandonImg src={Brandon} alt="브랜든 이미지"></BrandonImg>
                          <div style={{ width: "0.625rem" }} />
                          <Body4>
                            브랜딩 어시스턴트 <b>Brandon</b>
                          </Body4>
                        </ChatName>
                        <div style={{ height: "0.625rem" }} />
                        <ChatBubbleBrandon>
                          <Div style={{ height: "50%", color: "white", justifyContent: "start", fontSize: "1rem" }}>마케팅에 대한 깊은 열정과 사회적 대의에 대한 헌신을 결합하여 혁신적
                            이고 윤리적인 마케팅 전략을 추구하는 기업 및 NGO를 대상으로 사회적,
                            환경적 대의를 증진하는 영향력 있는 솔루션을 제공하여 궁극적으로 더
                            나은 세상을 만들고자 합니다.
                          </Div>
                        </ChatBubbleBrandon>
                        <Div style={{ justifyContent: "end" }}>
                          <ChatBubbleUser>
                            <Div style={{ height: "50%", color: "white", justifyContent: "end", fontSize: "1rem" }}>마케팅에 대한 깊은 열정과 사회적 대의에 대한 헌신을 결합하여 혁신적
                              이고 윤리적인 마케팅 전략을 추구하는 기업 및 NGO를 대상으로 사회적,
                              환경적 대의를 증진하는 영향력 있는 솔루션을 제공하여 궁극적으로 더
                              나은 세상을 만들고자 합니다.
                            </Div>
                          </ChatBubbleUser>
                        </Div>
                      </ChatContainerBrandon>
                    </Div>
                  </Div>
                </Div>
                <Div style={{ height: "15%", alignItems: "end" }}>
                  <Download onClick={downloadHandler} style={{ fontSize: "1.25rem", fontWeight: "600", margin: "0 0 1.9375rem 0" }}>
                    다운로드
                  </Download>
                </Div>
              </Div>
            </Div>
            <Div style={{ width: "10%", height: "90vh" }}>
            </Div>
          </Div>
      }[toggle]}
    </Div >
  )
};

export default WebOutput;

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
  /* border: 0.0313rem solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

const Concept = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  &:hover {
    cursor: pointer;
  }
`;

const Story = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  &:hover {
    cursor: pointer;
  }
`;

const Chat = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  &:hover {
    cursor: pointer;
  }
`;

const Download = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  border-radius: 0rem;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  color:white;
  box-sizing: border-box;
  width: 13.125rem;
  height: 3.1875rem;
  left: calc(50% - 13.125rem/2);
  top: 152.875rem;
  background: rgba(255, 255, 255, 0.1);
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 1.5854rem -1.5854rem 1.5854rem rgba(194, 194, 194, 0.1), inset -1.5854rem 1.5854rem 1.5854rem rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.5854rem);
  border-radius: 1.25rem;
  &:hover {
    cursor: pointer;
    background: #2B2D36;
  }
`;


const Overlay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  /* border: 0.5px solid black; */
  border-radius: 0.625rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  position: absolute;
  background-Color: black;
  opacity: 0;
  top: 0;
  /* left: 0; */
  z-Index: 3;
  &:hover {
    opacity: 0.3;
  }
`;

const Overlay2 = styled.div`
  /* Rectangle 154 */


`;

const A = styled.a`
  color: white;
  /* mix-blend-mode: soft-light; */
  justify-content: start;
  align-items: start;
  width: 100%;
  /* letter-Spacing: -px */
`;


const Button = styled.button`
box-sizing: border-box;
position: absolute;
width: 20.3125rem;
height: 3.1875rem;
left: calc(50% - 20.3125rem/2 + 0.0313rem);
top: 33.125rem;

background: rgba(255, 255, 255, 0.1);
border: 0.0625rem solid rgba(255, 255, 255, 0.2);
box-shadow: inset 1.5854rem -1.5854rem 1.5854rem rgba(194, 194, 194, 0.1), inset -1.5854rem 1.5854rem 1.5854rem rgba(255, 255, 255, 0.1);
backdrop-filter: blur(1.5854rem);
/* Note: backdrop-filter has minimal browser support */
border-radius: 1.25rem;

display: flex;
`;

const BrandonImg = styled.img`
  width: 2.25rem;

`;

const Img = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  /* border: 1px solid #555555; */
  /* border-radius: 0.625rem; */
  position: ${(props) => props.position || ""};
  object-fit: cover;
  /* &:hover {
    box-shadow: 0 0 10px 10px rgb(0, 0, 0, 0.2);;
  } */
`;

const ArrowImg = styled.img`
  width: 1.25rem;
  /* margin: 6.875rem 0 0 2.5rem; */
  border-radius: 0.625rem;
  object-fit: cover;
  &:hover {
    filter: brightness(0.7);
    cursor: pointer;
  }
  
`;

const StoryImgTag = styled.img`
  width: 18.75rem;
  height: 18.75rem;
  /* margin: 6.875rem 0 0 2.5rem; */
  object-fit: cover;
  
`;

const Hr = styled.div`
  width:100%;
  height: 0.0625rem;
  color: white;
  background-color: white;
  margin: 2.5rem 0 2.5rem 0;
`;

const ChatContainerBrandon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 0.0313rem solid black;
`;

const ChatName = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;

const Body4 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body4};
  font-weight: ${({ theme }) => theme.fontWeights.Body4};
  line-height: ${({ theme }) => theme.LineHeight.Body4};
  font-family: "Pretendard";
`;

const Text = styled.pre`
  all: unset;
  white-space: pre-wrap;
  font-family: "Pretendard";
  color: white;
  font-size: 1rem;
`;



const ChatBubbleBrandon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 48.75rem;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;  padding: 1.5rem;
  border: 0.0313rem solid black;
  border-radius: 0 0.625rem 0.625rem 0.625rem;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(calc(var(--text-field-blur, 6.25rem) / 2));
`;

const ChatBubbleUser = styled.div`
  width: 48.75rem;
  padding: 1.5rem;
  margin: 3.125rem 0;
  border-radius: 0.625rem 0.625rem 0 0.625rem;
  background: var(--ver-2-text-field, rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(3.125rem);
  border: 0.0313rem solid black;
`;