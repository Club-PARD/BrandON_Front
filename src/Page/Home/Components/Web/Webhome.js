import React from "react";
import styled from "styled-components";

const CLIENT_ID =
  "941001632953-ja7dpvnsusm7r287su9top3otp939dla.apps.googleusercontent.com";
const REDIRECT_URI = "http://localhost:8080/login/oauth2/code/google";

const WebHome = () => {
  return (
    <Container>
      <HeaderText>
        <StyledText>
          “Everybody has a plan <ItalicPart>until they get punched </ItalicPart>
          in the face”
        </StyledText>
      </HeaderText>

      <TestStart>
        <LoginLink
          href={`https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`}
        >
          지금 바로 ~하기
        </LoginLink>
      </TestStart>

      <OnBoading>
        <img src="Rectangle28.png"></img>
      </OnBoading>

      <TestStart>
        <LoginLink
          href={`https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`}
        >
          지금 바로 ~하기
        </LoginLink>
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
const LoginLink = styled.a`
  color: var(--White, #fff);
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
