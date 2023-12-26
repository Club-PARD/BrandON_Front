import React from "react";
import styled from "styled-components";
import WoochalDead from "../../../../Assets/Woochal_Dead.png";

const WebHistoryFeed = (props) => {
  return (
    <Div
      style={{
        display: "block",
        width: "450px",
        height: "450px",
        fontSize: "32px",
        margin: "10px",
      }}
    >
      {props.imgURL === "" ? (
        <Div style={{ display: "block", position: "relative" }}>
          <Img src={WoochalDead}></Img>
          <Div
            style={{
              position: "absolute",
              backgroundColor: "#000000",
              opacity: "70%",
              top: "0",
              left: "0",
              zIndex: "1",
            }}
          ></Div>
        </Div>
      ) : (
        <Img src={props.imgURL}></Img>
      )}
    </Div>
  );
};

export default WebHistoryFeed;

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
  border-radius: 10px;
  box-sizing: content-box;
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  font-family: Pretendard;
  /* color: ${({ theme }) => theme.colors.secondary}; */
`;

const Img = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-radius: 10px;
  position: ${(props) => props.position || ""};
`;
