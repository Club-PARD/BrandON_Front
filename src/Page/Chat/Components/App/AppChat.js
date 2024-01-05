import React from "react";
import styled from "styled-components";
import Brandon from "../../../../Assets/brandon_final.gif";

const AppChat = () => {
  return (
    <Div>
      <Div style={{ flexDirection: "column" }}>
        <Div
          style={{
            height: "50vh",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Div
            style={{
              height: "50vh",
              color: "white",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <Div
              style={{ height: "4vh", fontSize: "1.225rem", fontWeight: "300" }}
            >
              모바일 환경은 준비 중입니다.
            </Div>
            <Div
              style={{ height: "4vh", fontSize: "1.225rem", fontWeight: "300" }}
            >
              데스크톱 환경에서 사용해 주세요.
            </Div>
          </Div>
          <Div
            style={{
              height: "10vh",
              fontSize: "4.5rem",
              fontWeight: "900",
              color: "white",
              margin: "0 0 0 0",
              letterSpacing: "-0.1875rem",
            }}
          >
            <BrandonImg src={Brandon} />
          </Div>
        </Div>
        <Div style={{ height: "35vh", alignItems: "center" }}></Div>
      </Div>
    </Div>
  );
};

export default AppChat;

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

const BrandonImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 62.5rem;
  position: absolute;
  object-fit: cover;
  opacity: 1;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
