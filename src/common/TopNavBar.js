import React from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

const TopNavBar = () => {
  return (
    <Div>
      <Link to="/" style={{ all: "unset", cursor: "pointer" }}>
        <Header1>로고</Header1>
      </Link>
      <div style={{ flex: 1 }} />
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
      <div style={{ width: "100px" }} />
      <Body1>로그인</Body1>
    </Div>
  );
};

export default TopNavBar;

const Div = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 48px;
  width: 100%;
  height: 72px;
  background-color: black;
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
