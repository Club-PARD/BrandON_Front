import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { recoilUserAllResults, } from "../../../../atom/loginAtom";
import Brandon from "../../../../Assets/brandon_final.gif";
import CardWhite from "../../../../Assets/Card_White.png";
import CardBlue from "../../../../Assets/Card_Blue.png";
import CardPurple from "../../../../Assets/Card_Purple.png";
import CardPink from "../../../../Assets/Card_Pink.png";

const WebError404 = () => {

  const [userData, setUserData] = useRecoilState(recoilUserAllResults);
  const [chatroom, setChatroom] = useState([]);

  const chatRoomIdS = localStorage.getItem("chatRoomId");

  console.log(userData);
  console.log(chatroom);
  console.log(chatroom.answers);
  console.log(chatRoomIdS);

  useEffect(() => {
    for (let i = 0; i < userData.chatRooms.length; i++) {
      if (userData.chatRooms[i].chatRoomId == chatRoomIdS) {
        setChatroom(userData.chatRooms[i]);
      }
    }
  }, [userData])

  const navigate = useNavigate();


  const homeButtonHandler = () => {
    navigate("/")
  }


  return (
    <Div>
      <Div style={{ flexDirection: "column" }}>
        <Div style={{ height: "40vh", alignItems: "end" }}>
          <Div style={{ height: "10vh", fontSize: "2.5rem", fontWeight: "600", color: "white" }}>
            아직 결과물이 없어요
          </Div>
        </Div>
        <Div style={{ height: "15vh", alignItems: "start" }}>
          <Div style={{ height: "5vh", fontSize: "1.75rem", fontWeight: "300", color: "white" }}>
            Brandon과 이야기해서 결과물을 만들어보세요.
          </Div>
        </Div>
        <Div style={{ height: "30vh", alignItems: "start" }}>
          <Div style={{ height: "5vh", fontSize: "1.75rem", fontWeight: "300", color: "white" }}>
            <Button onClick={homeButtonHandler}>
              <Div style={{ width: "60%", justifyContent: "start", margin: "0.125rem 0 0 1.25rem", color: "white", fontFamily: "Pretendard Variable", fontStyle: "normal", fontWeight: "700", fontSize: "1.125rem", lineHeight: "1.3125rem", left: "calc(50% - 5.875rem/2 + 1.75rem)", top: "calc(50% - 1.3125rem/2 + 10.3438rem)" }}>홈으로 가기</Div>
            </Button>
          </Div>
        </Div>
      </Div>
    </Div>

  )
};

export default WebError404;

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

&:hover {
    cursor: pointer;
    background: #2B2D36;
  }
`;