import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { isLogined,accessTokenState } from "../atom/loginAtom";
import { useState } from "react";

const TopNavBar = ({ isScrolled }) => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogined);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isDropdownView, setDropdownView] = useState(false)

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView)
  }

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false)
    }, 200);
  }
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('userID');
    setAccessToken(null); 
    setIsLoggedIn(false); 
  };

  return (
    <Div scrolled={isScrolled}>
      <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
        <Header1>로고</Header1>
      </Link>
      <div style={{ flex: 1 }} />
      
      {isLoggedIn && (
        <>
        <NavLink
        to="/"
        style={({ isActive }) =>
          isActive
            ? {
                all: "unset",
                cursor: "pointer",
                color: "skyblue",
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
                color: "skyblue",
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
                color: "skyblue",
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

      <div style={{ width: "100px" }} onBlur={handleBlurContainer}>
      <label onClick={handleClickContainer}>
        <button style={{all: "unset", color: "white", cursor: "pointer"}}><Body1>로그인</Body1></button>
      </label>
      {isDropdownView && (
      <ul style={{ position: 'absolute', listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <Link to='/history'>마이 페이지</Link>
        </li>
        <li style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={handleLogout}>
          로그아웃
        </li>
      </ul>
      )}
      </div>
        </>
      )}

      {/* <Body1>로그인</Body1> */}
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
    props.scrolled ? "rgba(0, 0, 0, 0.2)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(5px)" : "none")};
  transition: background-color 0.3s;
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
`;
