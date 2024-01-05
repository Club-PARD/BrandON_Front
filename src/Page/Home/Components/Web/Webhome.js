import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import {
  isLogined,
  accessTokenState,
  recoilUserID,
  recoilUserData,
  isFirstLogin,
} from "../../../../atom/loginAtom";

const WebHome = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogined);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserID] = useRecoilState(recoilUserID);
  const [, setUserData] = useRecoilState(recoilUserData);
  const [isFirstLoggedin, setIsFirstLoggedin] = useRecoilState(isFirstLogin);
  const handleLogin = (token) => {
    localStorage.setItem("accessToken", token);
    setIsLoggedIn(true);
    sendUserDataToGoogle(token);
  };

  const sendUserDataToServer = async (userData) => {
    //유저의 구글정보를 서버로 보내서 디비에 저장
    try {
      const jsonUserData = JSON.stringify(userData);

      const response = await axios.post(
        `${process.env.REACT_APP_URL}/login/google`,
        jsonUserData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("서버 응답2:", response.data); //response.data = 유저 아이디.
      setUserID(response.data.userId.toString());
      setIsFirstLoggedin(response.data.firstLogin);
      localStorage.setItem("userID", response.data.userId.toString());
      localStorage.setItem("nickname", response.data.nickname);
    } catch (error) {
      // console.error("서버 요청 에러2:", error);
      alert("서버 저장에 실패하였습니다.");
      navigate("/");
    }
  };

  const sendUserDataToGoogle = async (token) => {
    //구글에게 억세스토큰 보내서 사용자정보 받아옴
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // console.log("서버 응답:", response.data);
      setUserData({
        name: response.data.name,
        email: response.data.email,
        picture: response.data.picture,
      });
      sendUserDataToServer({
        name: response.data.name,
        email: response.data.email,
        picture: response.data.picture,
      }); // 빋은 데이터를 서버로 보내서 디비에 저장
    } catch (error) {
      // console.error("서버 요청 에러:", error);
      alert("구글 계정 데이터 요청에 실패하였습니다.");
      navigate("/");
    }
  };

  const login = useGoogleLogin({
    // 구글 로그인 실행
    onSuccess: (res) => {
      setAccessToken(res.access_token);
      handleLogin(res.access_token); //억세스 토큰을 로컬스토리지에 저장하고 악시오스로 구글에게 보냄.
      // if (isFirstLoggedin) {
      //   //FirstLogin이 true이면 이름 온보딩페이지
      //   navigate("/name");
      // } else {
      //   //FirstLogin이 false이면 원래페이지
      //   navigate("/");
      // }
    },
    onFailure: (err) => {
      // console.log(err);
      alert("구글 로그인에 실패하였습니다.");
      navigate("/");
    },
  });

  useEffect(() => {
    // 페이지 로드 시 로컬 스토리지에서 accessToken 확인
    const storedToken = localStorage.getItem("accessToken");

    if (storedToken) {
      setAccessToken(storedToken);
      setIsLoggedIn(true);
      sendUserDataToGoogle(storedToken);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // const getUserData = async () => {
  //   try {
  //     const data = await axios.get(
  //       `${process.env.REACT_APP_URL}/user/${userID}/allResults`
  //     );
  //     console.log(data.data);
  //     setUserAllResults(data.data);
  //     // setChatrooms(data.data.chatRooms)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   console.log(userID);
  //   getUserData();
  // }, [userID]);

  useEffect(() => {
    // console.log(isFirstLoggedin);
    if (isFirstLoggedin !== null) {
      if (isFirstLoggedin) {
        navigate("/name");
      }
    }
  }, [isFirstLoggedin]);

  return (
    <Container>
      <Overlay />
      <HeaderText>
        <img
          style={{ zIndex: "1" }}
          alt="Main 캐치프레이즈"
          src="home_catchphrase.png"
        ></img>
      </HeaderText>

      {isLoggedIn ? (
        <TestStart style={{ cursor: "pointer" }}>
          {isFirstLoggedin ? (
            <LoginLink to="/name">
              지금 바로 시작하기
              <Arrow src="arrow.png"></Arrow>
            </LoginLink>
          ) : (
            <LoginLink to="/chat">
              지금 바로 시작하기
              <Arrow src="arrow.png"></Arrow>
            </LoginLink>
          )}
        </TestStart>
      ) : (
        <TestStart style={{ cursor: "pointer" }}>
          <button style={{ all: "unset", color: "white" }} onClick={login}>
            지금 바로 시작하기
            <Arrow src="arrow.png"></Arrow>
          </button>
        </TestStart>
      )}

      <picture style={{ zIndex: 2 }}>
        <Image srcset="onboarding.webp" type="image/webp" />
        <HeaderImg src="onboarding.png" />
      </picture>

      {/* <OnBoading>
        <img style={{ zIndex: "1", width:"100vw", marginTop:"-18%"}} src="home mockup a.png"></img>
      </OnBoading> */}

      <Bottom>
        {isLoggedIn ? (
          <TestStart style={{ cursor: "pointer" }}>
            {isFirstLoggedin ? (
              <LoginLink to="/name">
                지금 바로 시작하기
                <Arrow src="arrow.png"></Arrow>
              </LoginLink>
            ) : (
              <LoginLink to="/chat">
                지금 바로 시작하기
                <Arrow src="arrow.png"></Arrow>
              </LoginLink>
            )}
          </TestStart>
        ) : (
          <TestStart style={{ cursor: "pointer" }}>
            <button style={{ all: "unset", color: "white" }} onClick={login}>
              지금 바로 시작하기
              <Arrow src="arrow.png"></Arrow>
            </button>
          </TestStart>
        )}
      </Bottom>
    </Container>
  );
};

export default WebHome;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* padding: 28px; */
`;

const HeaderText = styled.div`
  width: 78%;
  height: 144px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 132px;
`;

const HeaderImg = styled.img`
  width: 100vw;
  margin-top: -10%;
`;

const Image = styled.source`
  width: 100vw;
  margin-top: -10%;
`;

const TestStart = styled.div`
  width: 23%;
  height: 51px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.1) inset,
    25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.1) inset;
  backdrop-filter: blur(25.366666793823242px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 55px;
  z-index: 4;
  &:hover {
    background-color: #2b2d36;
  }
`;

const LoginLink = styled(Link)`
  color: var(--White, #fff);
  font-family: "Pretendard";
  font-size: ${({ theme }) => theme.Web_fontSizes.Header2};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.Header4};
  line-height: normal;
  text-decoration: none;
`;

const Arrow = styled.img`
  margin-left: 7%;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const Bottom = styled.div`
  width: 100vw;
  height: 200px;
  background-color: black;
  display: flex;
  justify-content: center;
  margin-top: -18%;
  z-index: 3;
`;
