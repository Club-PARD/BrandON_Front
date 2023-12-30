import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Woochal from "../../../../Assets/Woochal.png";
import ButtonCard from "../../../../Assets/Arrow.png";
import Brandon from "../../../../Assets/brandon_final.gif"
import { useNavigate } from "react-router-dom";
import WoochalDead from "../../../../Assets/Woochal_Dead.png";
import CardDefault from "../../../../Assets/Card_Default.png";
import html2canvas from 'html2canvas';

const WebOutput = () => {

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
          <Div style={{ flexDirection: "column", width: "41.875rem", height: "39.375rem", background: "rgba(0, 0, 0, 0.4)", borderRadius: "1.25rem", margin: "1.5625rem 0 0 0" }}>
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
            <Div style={{ height: "70%" }}>
              <Card id="Card"
                style={{
                  display: "block",
                  width: "28.125rem",
                  height: "15.625rem",
                  fontSize: "2rem",
                  borderRadius: "0.625rem",
                  margin: "1.875rem 0 0 0",
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
                        박우찰
                      </Div>
                    </Div>
                    <Div style={{ alignItems: "center", padding: "0rem 1.125rem 0rem 1.125rem", height: "20%", boxSizing: "border-box" }}>
                      <Div style={{ fontSize: "1.25rem", justifyContent: "start", alignItems: "bottom", height: "100%" }}>
                        혁신적인 백수
                      </Div>
                    </Div>
                    <Div style={{ alignItems: "start", padding: "0rem 1.125rem 0rem 1.125rem", height: "35%", boxSizing: "border-box" }}>
                      <Div style={{ fontSize: "1.125rem", justifyContent: "start", alignItems: "bottom", height: "80%", lineHeight: "125%" }}>
                        방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람.
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
            <Div style={{ height: "15%", alignItems: "end" }}>
              <Download onClick={downloadHandler} style={{ width: "13rem", height: "3.375rem", background: "#ffffff", borderRadius: "6.25rem", fontSize: "1.25rem", fontWeight: "600", margin: "0 0 1.9375rem 0" }}>
                다운로드
              </Download>
            </Div>
          </Div>
        </Div>
        <Div style={{ width: "20%", height: "90vh" }}>

        </Div>
      </Div>
        :
        <Div style={{}}>
          <Div style={{ width: "20%", height: "90vh", justifyContent: "start", alignItems: "start" }}>
            <Div style={{ width: "20%", height: "10%", justifyContent: "start", alignItems: "start", margin: "3.875rem 0 0 7.1875rem" }}>
              <ArrowImg src={ButtonCard} style={{ margin: "0 0 0 0" }} onClick={arrowHandler} />
            </Div>
          </Div>
          <Div style={{ width: "60%", height: "90vh", alignItems: "start" }}>
            <Div style={{ flexDirection: "column", width: "41.875rem", height: "39.375rem", background: "rgba(0, 0, 0, 0.4)", borderRadius: "1.25rem", margin: "1.5625rem 0 0 0" }}>
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
              <Div style={{ height: "70%" }}>
                <Card
                  id="Card"
                  style={{
                    display: "block",
                    width: "28.125rem",
                    height: "15.625rem",
                    fontSize: "2rem",
                    borderRadius: "0.625rem",
                    margin: "1.875rem 0 0 0",
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
                          박우찰
                        </Div>
                      </Div>
                      <Div style={{ alignItems: "center", padding: "0rem 1.125rem 0rem 1.125rem", height: "20%", boxSizing: "border-box" }}>
                        <Div style={{ fontSize: "1.25rem", justifyContent: "start", alignItems: "bottom", height: "100%" }}>
                          혁신적인 백수
                        </Div>
                      </Div>
                      <Div style={{ alignItems: "start", padding: "0rem 1.125rem 0rem 1.125rem", height: "35%", boxSizing: "border-box" }}>
                        <Div style={{ fontSize: "1.125rem", justifyContent: "start", alignItems: "bottom", height: "80%", lineHeight: "125%" }}>
                          방황하는 청소년들에게 인생 밑바닥의 예시를 몸소 보여줌으로써 청소년들에게 마음의 위안 또는 경각심을 주는 사람.
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
              <Div style={{ height: "15%", alignItems: "end" }}>
                <Download onClick={downloadHandler} style={{ width: "13rem", height: "3.375rem", background: "#ffffff", borderRadius: "6.25rem", fontSize: "1.25rem", fontWeight: "600", margin: "0 0 1.9375rem 0" }}>
                  다운로드
                </Download>
              </Div>
            </Div>
          </Div>
          <Div style={{ width: "20%", height: "90vh" }}>

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