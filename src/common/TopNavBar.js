import React from "react";
import axios from "axios";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { useGoogleLogin } from "@react-oauth/google";
import {
  isLogined,
  accessTokenState,
  recoilUserID,
  recoilUserData,
  nickname,
} from "../atom/loginAtom";
import { useState } from "react";

const TopNavBar = ({ isScrolled }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogined);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isDropdownView, setDropdownView] = useState(false);
  const [userID, setUserID] = useRecoilState(recoilUserID);
  const [userData, setUserData] = useRecoilState(recoilUserData);
  const [userNickname, setUserNickname] = useRecoilState(nickname);

  const handleLogin = (token) => {
    localStorage.setItem("accessToken", token);
    setIsLoggedIn(true);
    sendUserDataToGoogle(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userID");
    setAccessToken(null);
    setIsLoggedIn(false);
    navigate("/");
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
      setUserID(response.data.userId);
      localStorage.setItem("userID", response.data);
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
    },
    onFailure: (err) => {
      console.log(err);
    },
  });

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  return (
    <Div scrolled={isScrolled}>
      <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
        <Header1>로고</Header1>
      </Link>
      <div style={{ flex: 1 }} />

      {!isLoggedIn && (
        <>
          <button
            style={{ all: "unset", color: "white", cursor: "pointer" }}
            onClick={login}
          >
            구글 로그인
          </button>
        </>
      )}
      {isLoggedIn && (
        <>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? {
                    all: "unset",
                    cursor: "pointer",
                    color: "#8F2EFF",
                  }
                : {
                    all: "unset",
                    cursor: "pointer",
                    color: "white",
                  }
            }
          >
            <Body1>홈</Body1>
          </NavLink>
          <div style={{ width: "66px" }} />
          <NavLink
            to="/chat"
            style={({ isActive }) =>
              isActive
                ? {
                    all: "unset",
                    cursor: "pointer",
                    color: "#8F2EFF",
                  }
                : {
                    all: "unset",
                    cursor: "pointer",
                    color: "white",
                  }
            }
          >
            <Body1>채팅</Body1>
          </NavLink>
          <div style={{ width: "66px" }} />
          <NavLink
            to="/history"
            style={({ isActive }) =>
              isActive
                ? {
                    all: "unset",
                    cursor: "pointer",
                    color: "#8F2EFF",
                  }
                : {
                    all: "unset",
                    cursor: "pointer",
                    color: "white",
                  }
            }
          >
            <Body1>결과</Body1>
          </NavLink>
          <div style={{ width: "4.25rem" }} />
          <div onBlur={handleBlurContainer}>
            <label onClick={handleClickContainer}>
              <button
                style={{ all: "unset", color: "white", cursor: "pointer" }}
              >
                <Body1>
                  <img
                    src={userData.picture}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                    }}
                  ></img>
                  <div style={{ width: "0.9375rem" }} />
                  {localStorage.getItem('nickname')}
                </Body1>
              </button>
            </label>
            {isDropdownView && (
              <Ul>
                <li style={{ marginBottom: "10px" }}>
                  <Link
                    to="/history"
                    style={{ all: "unset", cursor: "pointer" }}
                  >
                    마이페이지
                  </Link>
                </li>
                <li style={{ cursor: "pointer" }} onClick={handleLogout}>
                  로그아웃
                </li>
              </Ul>
            )}
          </div>
        </>
      )}
    </Div>
  );
};

export default TopNavBar;

const Div = styled.div`
  display: flex;
  position: fixed;
  z-index: 1000;
  align-items: center;
  padding: 12px 48px;
  width: 100%;
  height: 72px;
  background-color: ${(props) =>
    props.scrolled ? "rgba(0, 0, 0, 0.4)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(50px)" : "none")};
  transition: background-color 0.5s;
  color: white;
`;

const Header1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header1};
  font-weight: ${({ theme }) => theme.fontWeights.Header1};
  line-height: ${({ theme }) => theme.LineHeight.Header1};
  color: white;
  font-family: "Pretendard";
`;

const Body1 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body1};
  font-weight: ${({ theme }) => theme.fontWeights.Body1};
  line-height: ${({ theme }) => theme.LineHeight.Body1};
  font-family: "Pretendard";
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  text-align: center;
  padding: 10px;
  margin-left: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(50px);
  border-radius: 5px;
`;
