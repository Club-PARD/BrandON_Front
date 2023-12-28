import React from "react";
import styled from "styled-components";
import axios from "axios";
import { atom, useRecoilState } from 'recoil';
import { useEffect, useState } from "react";
import { useGoogleLogin} from "@react-oauth/google";

export const isLogined = atom ({
  key: 'isLogined',
  default: false,
});
export const accessTokenState = atom({
  key: 'accessTokenState',
  default: null,
});

const WebHome = () => {

  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogined);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const handleLogin = (token) => {
    localStorage.setItem('accessToken',token);
    setIsLoggedIn(true);
    sendUserDataToGoogle(token);
    console.log(isLogined);
  }
  const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    setAccessToken(null); 
    setIsLoggedIn(false); 
  };

  const userData = {
    name: '',
    email: '',
    picture: '',
  };

  const sendUserDataToServer = async (userData) => {
    try {
        const jsonUserData = JSON.stringify(userData);

        const response = await axios.post('http://Soim-env.eba-v9sk9m3i.ap-northeast-2.elasticbeanstalk.com/login/google', jsonUserData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('서버 응답2:', response.data); // reesponse.data 이 userID
    } catch (error) {
        console.error('서버 요청 에러:', error);
    }
};
  const sendUserDataToGoogle = async (token) => {
    try {
        const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log('서버 응답:', response.data); 
        userData.name = response.data.name;
        userData.email = response.data.email;
        userData.picture = response.data.picture;
        sendUserDataToServer(userData);
    } catch (error) {
        console.error('서버 요청 에러:', error);
    }
};

  const login = useGoogleLogin({
    onSuccess : (res) => {
        const token = res.access_token;
        handleLogin(token);
    },
    onFailure : (err) => {
        console.log(err);
    }
  });

  return (
    
    <Container>
      <HeaderText>
        <StyledText>
          “Everybody has a plan <ItalicPart>until they get punched </ItalicPart>
          in the face”
        </StyledText>
      </HeaderText>

      
        <TestStart>
          <button style={{all: "unset", color: "white", cursor: "pointer"}} onClick={login}>구글 로그인</button>
          {/* <LoginLink onClick={login}>지금 바로 ~하기</LoginLink> */}
        </TestStart>

      <OnBoading>
        <img src="Rectangle28.png"></img>
      </OnBoading>

      <TestStart>
          <button style={{all: "unset", color: "white", cursor: "pointer"}} onClick={login}>구글 로그인</button>
          {/* <LoginLink onClick={login}>지금 바로 ~하기</LoginLink> */}
        </TestStart>
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
  width: 50%;
  height: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 132px;
`;

const TestStart = styled.div`
  width: 250px;
  height: 51px;
  border-radius: 100px;
  background: var(--btn, #2b2d36);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 132px;
`;

const LoginLink = styled.button`
  color: var(--White, #fff);
  background-color: inherit;
  font-family: "Pretendard";
  font-size: ${({ theme }) => theme.Web_fontSizes.Header2};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.Header4};
  line-height: normal;
  text-decoration: none;
`;

const OnBoading = styled.div`
  margin-top: 25px;
`;
