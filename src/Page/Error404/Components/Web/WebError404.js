import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const WebError404 = () => {
  const navigate = useNavigate();

  const homeButtonHandler = () => {
    navigate("/");
  };

  return (
    <Div>
      <Div style={{ flexDirection: "column" }}>
        <Div style={{ height: "35vh", alignItems: "end" }}>
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
            404 Error
          </Div>
        </Div>
        <Div style={{ height: "20vh", alignItems: "start" }}>
          <Div
            style={{ height: "14vh", color: "white", flexDirection: "column" }}
          >
            <Div
              style={{ height: "4vh", fontSize: "1.125rem", fontWeight: "300" }}
            >
              페이지를 찾을 수 없습니다.
            </Div>
            <Div
              style={{ height: "4vh", fontSize: "1.125rem", fontWeight: "300" }}
            >
              존재하지 않는 주소를 입력하셨거나,
            </Div>
            <Div
              style={{ height: "4vh", fontSize: "1.125rem", fontWeight: "300" }}
            >
              요청하신 페이지의 주소가 변경 혹은 삭제되어 찾을 수 없습니다.
            </Div>
          </Div>
        </Div>
        <Div style={{ height: "30vh", alignItems: "start" }}>
          <Div
            style={{
              height: "5vh",
              fontSize: "1.75rem",
              fontWeight: "300",
              color: "white",
            }}
          >
            <Button onClick={homeButtonHandler}>
              <Div
                style={{
                  width: "60%",
                  justifyContent: "center",
                  color: "white",
                  fontFamily: "Pretendard Variable",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "1.125rem",
                  lineHeight: "1.3125rem",
                  left: "calc(50% - 5.875rem/2 + 1.75rem)",
                  top: "calc(50% - 1.3125rem/2 + 10.3438rem)",
                }}
              >
                홈으로 가기
              </Div>
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default WebError404;

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

const Button = styled.button`
  box-sizing: border-box;
  position: absolute;
  width: 20.3125rem;
  height: 3.1875rem;
  left: calc(50% - 20.3125rem / 2 + 0.0313rem);
  top: 33.125rem;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  box-shadow: inset 1.5854rem -1.5854rem 1.5854rem rgba(194, 194, 194, 0.1),
    inset -1.5854rem 1.5854rem 1.5854rem rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(1.5854rem);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 1.25rem;

  display: flex;

  &:hover {
    cursor: pointer;
    background: #2b2d36;
  }
`;
