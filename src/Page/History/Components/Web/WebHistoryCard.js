import React, { useState } from "react";
import styled from "styled-components";
import WoochalDead from "../../../../Assets/Woochal_Dead.png";
import CardDefault from "../../../../Assets/Card_Default.png";

const WebHistoryCard = (props) => {

  const [card, setCard] = useState({ null_safety: "" });

  return (
    <Div
      style={{
        display: "block",
        width: "28.125rem",
        height: "15.625rem",
        fontSize: "2rem",
      }}
    >
      <Div style={{ display: "block", position: "relative" }}>
        <Div
          style={{
            position: "absolute",
            backgroundColor: "none",
            opacity: 1,
            top: "0",
            left: "0",
            zIndex: "3",
            flexDirection: "column",
          }}
        >
          <Div style={{ alignItems: "end", padding: "0rem 1.125rem 0rem 1.125rem", height: "45%", boxSizing: "border-box" }}>
            <Div style={{ fontSize: "1.5rem", justifyContent: "start", alignItems: "bottom", height: "20%" }}>
              {props.undefined === true ? "" : props.name}
            </Div>
          </Div>
          <Div style={{ alignItems: "center", padding: "0rem 1.125rem 0rem 1.125rem", height: "20%", boxSizing: "border-box" }}>
            <Div style={{ fontSize: "1.25rem", justifyContent: "start", alignItems: "bottom", height: "100%" }}>
              {props.undefined === true ? "" : props.brandCard.brandJob}
            </Div>
          </Div>
          <Div style={{ alignItems: "start", padding: "0rem 1.125rem 0rem 1.125rem", height: "35%", boxSizing: "border-box" }}>
            <Div style={{ fontSize: "1.125rem", justifyContent: "start", alignItems: "bottom", height: "80%", lineHeight: "125%" }}>
              {props.undefined === true ? "" : props.brandCard.jobDetail}
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
          }}
        />
        {props.undefined === true ? <Img src={CardDefault}></Img> : <Img src={WoochalDead}></Img>}
      </Div>
    </Div>
  );
};

export default WebHistoryCard;


const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0vh 0vh 0vh 0vh;
  padding: 0vh 0vh 0vh 0vh;
  background-color: none;
  /* border: 0.5px solid black; */
  border-radius: 0.625rem;
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
  /* border: 1px solid #555555; */
  border-radius: 0.625rem;
  position: ${(props) => props.position || ""};
  object-fit: cover;
  /* &:hover {
    box-shadow: 0 0 10px 10px rgb(0, 0, 0, 0.2);;
  } */
`;
