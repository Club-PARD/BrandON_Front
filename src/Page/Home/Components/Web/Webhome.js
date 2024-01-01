import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userID, setUserID] = useRecoilState(recoilUserID);
  const [userData, setUserData] = useRecoilState(recoilUserData);
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
        "http://Soim-env.eba-v9sk9m3i.ap-northeast-2.elasticbeanstalk.com/login/google",
        jsonUserData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("서버 응답2:", response.data); //response.data = 유저 아이디.
      setUserID(response.data.userId.toString());
      setIsFirstLoggedin(response.data.firstLogin);
      localStorage.setItem("userID", response.data.userId.toString());
    } catch (error) {
      console.error("서버 요청 에러2:", error);
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
      console.log("서버 응답:", response.data);
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
      console.error("서버 요청 에러:", error);
    }
  };

  const login = useGoogleLogin({
    // 구글 로그인 실행
    onSuccess: (res) => {
      setAccessToken(res.access_token);
      handleLogin(res.access_token); //억세스 토큰을 로컬스토리지에 저장하고 악시오스로 구글에게 보냄.
      if (isFirstLoggedin) {
        //FirstLogin이 true이면 이름 온보딩페이지
        navigate("/name");
      } else {
        //FirstLogin이 false이면 원래페이지
        navigate("/chat");
      }
    },
    onFailure: (err) => {
      console.log(err);
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

  return (
    <Container>
      <HeaderText>
        <img src="HomeCatchPrize.png"></img>
      </HeaderText>

      {isLoggedIn ? (
        <TestStart>
          {isFirstLoggedin ? (
            <LoginLink to="/name">지금 바로 시작하기
              <Arrow src="Arrow2.png"></Arrow>
            </LoginLink>
          ) : (
            <LoginLink to="/chat">지금 바로 시작하기
              <Arrow src="Arrow2.png"></Arrow>
            </LoginLink>
          )}
        </TestStart>
      ) : (
        <TestStart>
          <button
            style={{ all: "unset", color: "white", cursor: "pointer" }}
            onClick={login}
          >
            지금 바로 시작하기
            <Arrow src="Arrow2.png"></Arrow>
          </button>
        </TestStart>
      )}

      <OnBoading>
        <img src="Rectangle28.png"></img>
      </OnBoading>

      {isLoggedIn ? (
        <TestStart>
          {isFirstLoggedin ? (
            <LoginLink to="/chat">지금 바로 시작하기
              <Arrow src="Arrow2.png"></Arrow>
            </LoginLink>
          ) : (
            <LoginLink to="/chat">지금 바로 시작하기
              <Arrow src="Arrow2.png"></Arrow>
            </LoginLink>
          )}
        </TestStart>
      ) : (
        <TestStart>
          <button
            style={{ all: "unset", color: "white", cursor: "pointer" }}
            onClick={login}
          >
            지금 바로 시작하기
            <Arrow src="Arrow2.png"></Arrow>
          </button>
        </TestStart>
      )}
    </Container>
  );
};

export default WebHome;

// theme 파일 폰트 적용 방법 + style-components 사용
const Header1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  color: ${({ theme }) => theme.colors.text};
  font-family: "Pretendard";
`;

const Header2 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header2};
  font-weight: ${({ theme }) => theme.fontWeights.Header2};
  line-height: ${({ theme }) => theme.LineHeight.Header2};
  color: ${({ theme }) => theme.colors.accent};
  font-family: "Pretendard";
`;

const StyledText = styled.div`
  color: var(--black, #101010);
  text-align: center;
  font-family: "Manrope";
  font-size: 60px;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -2.4px;
`;

const ItalicPart = styled.span`
  color: var(--black, #101010);
  font-family: "Playfair Display";
  font-size: 60px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -2.4px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 28px;
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

const TestStart = styled.div`
  width: 23%;
  height: 51px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background: rgba(255, 255, 255, 0.10);
  box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.10) inset, 25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.10) inset;
  backdrop-filter: blur(25.366666793823242px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 55px;
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

const OnBoading = styled.div`
  margin-top: 78px;
`;

const Arrow = styled.img`
  margin-left: 7%;
`;
