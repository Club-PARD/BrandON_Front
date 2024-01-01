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

const WebOutput = () => {

  const [chatroom, setChatroom] = useState([]);
  const getChatroomData = async () => {
    try {
      const chatRoomId = localStorage.getItem("chatRoomId");
      const data = await axios.get(`${process.env.REACT_APP_URL}/26/${chatRoomId}/myResult`)
      console.log(data.data);
      setChatroom(data.data)
    }
    catch (error) {
      console.log(error);
    }
  }
  console.log(chatroom);

  useEffect(() => {
    getChatroomData()
  }, [])

  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);
  const storyToggleHandler = () => {
    setToggle(false);
  }
  const conceptToggleHandler = () => {
    setToggle(true);
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

  return (
    <Div>
      {toggle ? <Div style={{}}>
        <Div style={{ width: "20%", height: "90vh", justifyContent: "start", alignItems: "start" }}>
          <Div style={{ width: "20%", height: "10%", justifyContent: "start", alignItems: "start", margin: "3.875rem 0 0 7.1875rem" }}>
            <ArrowImg src={ButtonCard} style={{ margin: "0 0 0 0" }} onClick={arrowHandler} />
          </Div>
        </Div>
        <Div style={{ width: "60%", height: "90vh", alignItems: "start" }}>
          <Div style={{ flexDirection: "column", width: "41.875rem", height: "39.375rem", background: "", borderRadius: "1.25rem", margin: "1.5625rem 0 0 0" }}>
            <Div style={{ height: "15%", alignItems: "start" }}>
              <Div style={{ width: "27.5rem", height: "3.75rem", background: "#D9D9D9", borderRadius: "6.25rem", justifyContent: "space-between", margin: "1.4375rem 0 0 0" }}>
                <Concept onClick={conceptToggleHandler} style={{ width: "13.125rem", height: "3.1875rem", margin: "0 0 0 0.5rem", background: "#ffffff", borderRadius: "1.875rem", boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)", fontSize: "1.25rem", fontWeight: "600" }}>
                  컨셉
                </Concept>
                <Story onClick={storyToggleHandler} style={{ width: "48%" }}>
                  <Div style={{ width: "100%", fontSize: "1.25rem", fontWeight: "600", color: "#ABABAB", justifyContent: "end", margin: "0 5.4375rem 0 0" }}>스토리</Div>
                </Story>
              </Div>
            </Div>
            <Div style={{ height: "60%", alignItems: "end", }}>
              <Card id="Card"
                style={{
                  display: "block",
                  width: "28.125rem",
                  height: "15.625rem",
                  fontSize: "2rem",
                  borderRadius: "0.625rem",
                  margin: "1.875rem 0 0.5rem 0",
                }}
              >
                <Div style={{ display: "block", position: "relative", borderRadius: "0.625rem" }}>
                  <Div
                    style={{
                      position: "absolute",
                      backgroundColor: "none",
                      opacity: 1,
                      top: "0",
                      left: "0",
                      zIndex: "3",
                      flexDirection: "column",
                      borderRadius: "0.625rem"
                    }}
                  >
                    <Div style={{ alignItems: "end", padding: "0rem 1.125rem 0rem 1.125rem", height: "45%", boxSizing: "border-box" }}>
                      <Div style={{ fontSize: "1.5rem", justifyContent: "start", alignItems: "bottom", height: "20%" }}>
                        {chatroom.chatNickName}
                      </Div>
                    </Div>
                    <Div style={{ alignItems: "center", padding: "0rem 1.125rem 0rem 1.125rem", height: "20%", boxSizing: "border-box" }}>
                      <Div style={{ fontSize: "1.25rem", justifyContent: "start", alignItems: "bottom", height: "100%" }}>
                        {chatroom?.brandCard?.brandJob || ""}
                      </Div>
                    </Div>
                    <Div style={{ alignItems: "start", padding: "0rem 1.125rem 0rem 1.125rem", height: "35%", boxSizing: "border-box" }}>
                      <Div style={{ fontSize: "1.125rem", justifyContent: "start", alignItems: "bottom", height: "80%", lineHeight: "125%" }}>
                        {chatroom?.brandCard?.jobDetail || ""}
                      </Div>
                    </Div>
                  </Div>
                  <Div
                    style={{
                      position: "absolute",
                      backgroundColor: "white",
                      opacity: 0.8,
                      top: "0",
                      left: "0",
                      zIndex: "1",
                      flexDirection: "column",
                      borderRadius: "0.625rem"
                    }}
                  />
                  <Img src={WoochalDead}></Img>
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
        :
        <Div style={{ height: "", justifyContent: "start", alignItems: "start" }}>
          <Div style={{ width: "10%", height: "90vh", justifyContent: "start", alignItems: "start" }}>
            <Div style={{ width: "20%", height: "10%", justifyContent: "start", alignItems: "start", margin: "3.875rem 0 0 7.1875rem" }}>
              <ArrowImg src={ButtonCard} style={{ margin: "0 0 0 0" }} onClick={arrowHandler} />
            </Div>
          </Div>
          <Div style={{ width: "80%", height: "", alignItems: "start" }}>
            <Div style={{ flexDirection: "column", width: "100%", borderRadius: "1.25rem", margin: "1.5625rem 0 0 0" }}>
              <Div style={{ height: "15%", alignItems: "start" }}>
                <Div style={{ width: "27.5rem", height: "3.75rem", background: "#D9D9D9", borderRadius: "6.25rem", justifyContent: "space-between", margin: "1.4375rem 0 0 0" }}>
                  <Concept onClick={conceptToggleHandler} style={{ width: "48%", }}>
                    <Div style={{ width: "100%", fontSize: "1.25rem", fontWeight: "600", color: "#ABABAB", justifyContent: "start", margin: "0 0 0 6rem" }}>컨셉</Div>
                  </Concept>
                  <Story onClick={storyToggleHandler} style={{ width: "13.125rem", height: "3.1875rem", margin: "0 0.5rem 0 0", background: "#ffffff", borderRadius: "1.875rem", boxShadow: "0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25)", fontSize: "1.25rem", fontWeight: "600" }}>
                    스토리
                  </Story>
                </Div>
              </Div>
              <Div style={{ height: "70%", margin: "4.375rem 0 4.375rem 0" }}>
                <Div style={{ flexDirection: "column", width: "100%", background: "rgba(0, 0, 0, 0.4)", borderRadius: "2.5rem", padding: "5.9375rem 7.1875rem 5.9375rem 7.1875rem", boxSizing: "border-box" }}>
                  <Div style={{ width: "100%", alignItems: "start" }}>
                    <Div style={{ width: "60%", flexDirection: "column", }}>
                      <Div style={{ height: "30%", color: "white", justifyContent: "start", alignItems: "center", padding: "1rem 0 2rem 0" }}><Div style={{ justifyContent: "start", fontSize: "3rem", fontWeight: "600" }}>전예람</Div></Div>
                      <Div style={{ height: "20%", color: "white", justifyContent: "start", fontSize: "1.75rem", fontWeight: "600", padding: "0 0 2.5rem 0" }}>사회적 공익을 위한 디지털 마케팅 전략가</Div>
                      <Div style={{ height: "50%", color: "#C9C9C9", justifyContent: "start", fontSize: "1.25rem" }}>마케팅에 대한 깊은 열정과 사회적 대의에 대한 헌신을 결합하여 혁신적
                        이고 윤리적인 마케팅 전략을 추구하는 기업 및 NGO를 대상으로 사회적,
                        환경적 대의를 증진하는 영향력 있는 솔루션을 제공하여 궁극적으로 더
                        나은 세상을 만들고자 합니다.
                      </Div>
                    </Div>
                    <Div style={{ width: "40%", justifyContent: "end", }}>
                      <StoryImgTag src={StoryImg} />
                    </Div>
                  </Div>
                  <Hr />
                  <Div style={{ height: "100%", flexDirection: "column" }}>
                    <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>브랜드 키워드</Div>
                    <Div>
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>핵심 가치와 신념</Div>
                        <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>핵심 가치와 신념</Div>
                      </Div>
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div style={{ justifyContent: "center", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>핵심 가치와 신념</Div>
                        <Div style={{ justifyContent: "center", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>핵심 가치와 신념</Div>
                      </Div>
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div style={{ justifyContent: "end", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>핵심 가치와 신념</Div>
                        <Div style={{ justifyContent: "end", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>핵심 가치와 신념</Div>
                      </Div>
                    </Div>
                  </Div>
                  <Hr />
                  <Div style={{ height: "100%", flexDirection: "column" }}>
                    <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>브랜드 스토리</Div>
                    <Div style={{ height: "100%", flexDirection: "column" }}>
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>사회변화</Div>
                        <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem", margin: "0 0 2.5rem 0" }}>대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절 대학시절</Div>
                      </Div>
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>사회변화</Div>
                        <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem", margin: "0 0 2.5rem 0" }}>대학시절</Div>
                      </Div>
                      <Div style={{ height: "100%", flexDirection: "column" }}>
                        <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.5rem", fontWeight: "600", }}>사회변화</Div>
                        <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem" }}>대학시절</Div>
                      </Div>
                    </Div>
                  </Div>
                  <Hr />
                  <Div style={{ height: "100%", flexDirection: "column" }}>
                    <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>브랜드 역량</Div>
                    <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem" }}>언어, 코딩 능력, 5년차 ARMY</Div>
                  </Div>
                  <Hr />
                  <Div style={{ height: "100%", flexDirection: "column" }}>
                    <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>브랜드 타겟</Div>
                    <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem" }}>인구 통계: 25~50세의 기업 및 NGO, 중견 및 고위급 전문가.
                      온라인 채널: LinkedIn, Twitter 및 전문 마케팅 포럼에서 활발히 활동 중입니다.
                      관심사: 사회적 대의, 디지털 마케팅 트렌드, 윤리적 비즈니스 관행에 관심이 있습니다.
                      행동 패턴: 혁신적이면서도 윤리적인 마케팅 솔루션을 추구하며, 협업 프로젝트에 개방적입니다.
                      심리학적 특성: 가치 중심적이고, 사회적 의식이 있으며, 미래 지향적입니다.
                      고객 피드백 및 참여: 실질적인 사회적 영향력과 혁신을 보여주는 전략에 반응합니다.
                    </Div>
                  </Div>
                  <Hr />
                  <Div style={{ height: "100%", flexDirection: "column" }}>
                    <Div style={{ justifyContent: "start", color: "white", fontSize: "2rem", fontWeight: "600", margin: "0 0 2.5rem 0" }}>온라인 콘텐츠 추천 방향</Div>
                    <Div style={{ justifyContent: "start", color: "#C9C9C9", fontSize: "1.25rem" }}>사회적, 환경적 대의를 증진하기 위한 혁신적인 디지털 마케팅 전략을 보여주는 콘텐츠 제작에 집중하세요. 사례 연구,
                      웨비나, 링크드인 및 트위터와 같은 플랫폼의 대화형 포럼과 같은 형식을 활용하여 영감을 주면서도 유익한 정보를 제
                      공해야 합니다. 디지털 마케팅 및 사회적 옹호 활동의 경험과 기술을 활용하여 인사이트와 조언을 제공하는 동시에 긍
                      정적인 영향을 미치는 데 열정적인 커뮤니티와 소통합니다.
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
      }
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
  border-radius: 0.625rem;
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