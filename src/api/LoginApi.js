import React from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { useGoogleLogin } from "@react-oauth/google";
import { isLogined,accessTokenState,recoilUserID } from "../atom/loginAtom";

const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogined);
const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
const [userID, setUserID] = useRecoilState(recoilUserID);

export const handleLogin = (token) => {
    localStorage.setItem('accessToken',token);
    setIsLoggedIn(true);
    sendUserDataToGoogle(token);
  }
export const handleLogout = () => {
    localStorage.removeItem('accessToken'); 
    localStorage.removeItem('userID');
    setAccessToken(null); 
    setIsLoggedIn(false); 
  };

export const userData = {
    name: '',
    email: '',
    picture: '',
  };

export const sendUserDataToServer = async (userData) => { //유저의 구글정보를 서버로 보내서 디비에 저장 
    try {
        const jsonUserData = JSON.stringify(userData);

        const response = await axios.post('http://Soim-env.eba-v9sk9m3i.ap-northeast-2.elasticbeanstalk.com/login/google', jsonUserData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('서버 응답2:', response.data); //response.data = 유저 아이디.
        setUserID(response.data);
        localStorage.setItem('userID',response.data);
    } catch (error) {
        console.error('서버 요청 에러:', error);
    }
};
export const sendUserDataToGoogle = async (token) => { //구글에게 억세스토큰 보내서 사용자정보 받아옴 
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
        sendUserDataToServer(userData); // 빋은 데이터를 서버로 보내서 디비에 저장 
    } catch (error) {
        console.error('서버 요청 에러:', error);
    }
};

export const login = useGoogleLogin({ // 구글 로그인 실행 
    onSuccess : (res) => {
        const token = res.access_token;
        handleLogin(token); //억세스 토큰을 로컬스토리지에 저장하고 악시오스로 구글에게 보냄.
    },
    onFailure : (err) => {
        console.log(err);
    }
  });