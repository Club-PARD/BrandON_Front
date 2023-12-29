import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Woochal from "../../../../Assets/Woochal.png";
import ButtonCard from "../../../../Assets/Button_Card.png";
import Brandon from "../../../../Assets/brandon_final.gif"
import { useNavigate } from "react-router-dom";
import WoochalDead from "../../../../Assets/Woochal_Dead.png";
import CardDefault from "../../../../Assets/Card_Default.png";
import html2canvas from 'html2canvas';

const WebOutput = () => {

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


  return (
    <Div>
      {toggle ? <Div style={{}}>
        <Div style={{ width: "20%", height: "90vh" }}>
        </Div>
        <Div style={{ width: "60%", height: "90vh", alignItems: "start" }}>
          <Div style={{ flexDirection: "column", width: "670px", height: "630px", background: "rgba(0, 0, 0, 0.4)", borderRadius: "20px", margin: "25px 0 0 0" }}>
            <Div style={{ height: "15%", alignItems: "start" }}>
              <Div style={{ width: "440px", height: "60px", background: "#D9D9D9", borderRadius: "100px", justifyContent: "space-between", margin: "23px 0 0 0" }}>
                <Concept onClick={conceptToggleHandler} style={{ width: "210px", height: "51px", margin: "0 0 0 8px", background: "#ffffff", borderRadius: "30px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontSize: "20px", fontWeight: "600" }}>
                  컨셉
                </Concept>
                <Story onClick={storyToggleHandler} style={{ width: "48%" }}>
                  <Div style={{ width: "100%", fontSize: "20px", fontWeight: "600", color: "#ABABAB", justifyContent: "end", margin: "0 87px 0 0" }}>스토리</Div>
                </Story>
              </Div>
            </Div>
            <Div style={{ height: "70%" }}>
              <Card id="Card"
                style={{
                  display: "block",
                  width: "28.125rem",
                  height: "15.625rem",
                  fontSize: "32px",
                  borderRadius: "10px",
                  margin: "30px 0 0 0",
                }}
              >
                <Div style={{ display: "block", position: "relative", borderRadius: "10px" }}>
                  <Div
                    style={{
                      position: "absolute",
                      backgroundColor: "none",
                      opacity: 1,
                      top: "0",
                      left: "0",
                      zIndex: "3",
                      flexDirection: "column",
                      borderRadius: "10px"
                    }}
                  >
                    <Div style={{ alignItems: "end", padding: "0px 18px 0px 18px", height: "45%", boxSizing: "border-box" }}>
                      <Div style={{ fontSize: "1.5rem", justifyContent: "start", alignItems: "bottom", height: "20%" }}>
                        박우찰
                      </Div>
                    </Div>
                    <Div style={{ alignItems: "center", padding: "0px 18px 0px 18px", height: "20%", boxSizing: "border-box" }}>
                      <Div style={{ fontSize: "1.25rem", justifyContent: "start", alignItems: "bottom", height: "100%" }}>
                        혁신적인 백수
                      </Div>
                    </Div>
                    <Div style={{ alignItems: "start", padding: "0px 18px 0px 18px", height: "35%", boxSizing: "border-box" }}>
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
                      borderRadius: "10px"
                    }}
                  />
                  <Img src={WoochalDead}></Img>
                </Div>
              </Card>
            </Div>
            <Div style={{ height: "15%", alignItems: "end" }}>
              <Download onClick={downloadHandler} style={{ width: "208px", height: "54px", background: "#ffffff", borderRadius: "100px", fontSize: "20px", fontWeight: "600", margin: "0 0 31px 0" }}>
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
          <Div style={{ width: "20%", height: "90vh" }}>
          </Div>
          <Div style={{ width: "60%", height: "90vh", alignItems: "start" }}>
            <Div style={{ flexDirection: "column", width: "670px", height: "630px", background: "rgba(0, 0, 0, 0.4)", borderRadius: "20px", margin: "25px 0 0 0" }}>
              <Div style={{ height: "15%", alignItems: "start" }}>
                <Div style={{ width: "440px", height: "60px", background: "#D9D9D9", borderRadius: "100px", justifyContent: "space-between", margin: "23px 0 0 0" }}>
                  <Concept onClick={conceptToggleHandler} style={{ width: "48%", }}>
                    <Div style={{ width: "100%", fontSize: "20px", fontWeight: "600", color: "#ABABAB", justifyContent: "start", margin: "0 0 0 96px" }}>컨셉</Div>
                  </Concept>
                  <Story onClick={storyToggleHandler} style={{ width: "210px", height: "51px", margin: "0 8px 0 0", background: "#ffffff", borderRadius: "30px", boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)", fontSize: "20px", fontWeight: "600" }}>
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
                    fontSize: "32px",
                    borderRadius: "10px",
                    margin: "30px 0 0 0",
                  }}
                >
                  <Div style={{ display: "block", position: "relative", borderRadius: "10px" }}>
                    <Div
                      style={{
                        position: "absolute",
                        backgroundColor: "none",
                        opacity: 1,
                        top: "0",
                        left: "0",
                        zIndex: "3",
                        flexDirection: "column",
                        borderRadius: "10px"
                      }}
                    >
                      <Div style={{ alignItems: "end", padding: "0px 18px 0px 18px", height: "45%", boxSizing: "border-box" }}>
                        <Div style={{ fontSize: "1.5rem", justifyContent: "start", alignItems: "bottom", height: "20%" }}>
                          박우찰
                        </Div>
                      </Div>
                      <Div style={{ alignItems: "center", padding: "0px 18px 0px 18px", height: "20%", boxSizing: "border-box" }}>
                        <Div style={{ fontSize: "1.25rem", justifyContent: "start", alignItems: "bottom", height: "100%" }}>
                          혁신적인 백수
                        </Div>
                      </Div>
                      <Div style={{ alignItems: "start", padding: "0px 18px 0px 18px", height: "35%", boxSizing: "border-box" }}>
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
                        borderRadius: "10px"
                      }}
                    />
                    <Img src={WoochalDead}></Img>
                  </Div>
                </Card>
              </Div>
              <Div style={{ height: "15%", alignItems: "end" }}>
                <Download onClick={downloadHandler} style={{ width: "208px", height: "54px", background: "#ffffff", borderRadius: "100px", fontSize: "20px", fontWeight: "600", margin: "0 0 31px 0" }}>
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
  border-radius: 0px;
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
  border-radius: 0px;
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
  border-radius: 0px;
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
  border-radius: 10px;
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
width: 325px;
height: 51px;
left: calc(50% - 325px/2 + 0.5px);
top: 530px;

background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
box-shadow: inset 25.3667px -25.3667px 25.3667px rgba(194, 194, 194, 0.1), inset -25.3667px 25.3667px 25.3667px rgba(255, 255, 255, 0.1);
backdrop-filter: blur(25.3667px);
/* Note: backdrop-filter has minimal browser support */
border-radius: 20px;

display: flex;
`;

const BrandonImg = styled.img`
  width: 36px;

`;

const Img = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  /* border: 1px solid #555555; */
  border-radius: 10px;
  position: ${(props) => props.position || ""};
  object-fit: cover;
  /* &:hover {
    box-shadow: 0 0 10px 10px rgb(0, 0, 0, 0.2);;
  } */
`;