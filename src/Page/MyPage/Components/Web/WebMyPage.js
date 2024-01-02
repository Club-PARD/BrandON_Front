import React from "react";
import styled from "styled-components";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { nickname,recoilUserID } from "../../../../atom/loginAtom";
import { useRecoilState } from "recoil";
import axios from "axios";

const WebMyPage = () => {

    const [text, setText] = useState('');
    const maxLength = 7; 
    const navigate = useNavigate();
    const [userNickname,setUserNickname] = useRecoilState(nickname);
    const [userEmail, setUserEmail] = useState();

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (inputValue.length <= maxLength) {
          setText(inputValue);
        }
    };

    const handleConfirmButton = () =>{
      setUserNickname(text);
      saveUserNickName(text);
      alert("변경되었습니다.");
      navigate("/");
    };

    const saveUserNickName = async (userNickname) => {
      try {
        const usernameData = {
          nickname: userNickname,
        };
        const response = await axios.post(
          `${process.env.REACT_APP_URL}/user/${localStorage.getItem(
            "userID"
          )}/saveNickname`,
          usernameData
        );
        console.log("서버 응답1(닉네임):", response.data.nickname);
        console.log(localStorage.setItem("nickname", response.data.nickname));
      } catch (error) {
        console.log("닉네임 요청 에러:", error);
      }
    };

    const getUserEmail = async () =>{
      try{
        const response = await axios.get(`${process.env.REACT_APP_URL}/user/${localStorage.getItem("userID")}/myProfile`);
        setUserEmail(response.data.email);
      }catch (error){
        console.log("이메일 요청 에러:",error);
      }
    };

    useEffect(() => {
      if (localStorage.getItem("accessToken") === null) {
        alert("로그인이 필요합니다.");
        navigate("/");
      }
      else{
        getUserEmail();
      }
    }, []);
    return (
      <>
      <Container>
        <Container2>

        <HeaderPont>프로필 설정</HeaderPont>
        
        <Container3>

            <IntroduceDiv>
                <IntroducePont>
                    <IntroduceBoldPont>브랜드 아이덴티티</IntroduceBoldPont>와
                    <IntroduceBoldPont> 브랜드 스토리</IntroduceBoldPont>에 들어갈 이름을 입력해주세요.
                </IntroducePont>
            </IntroduceDiv>

            <NameDiv>
              <IntroducePont>이름</IntroducePont>
            </NameDiv>

            <InputDiv>
                <InputName  
                type="text"
                value={text}  
                onChange={handleInputChange}
                maxLength={maxLength}
                placeholder="이름을 입력해주세요"></InputName>
                <Counter value={text} maxLength={maxLength}></Counter>
            </InputDiv>

            <EmailDiv>
              <IntroducePont>이메일</IntroducePont>
            </EmailDiv>

            <EmailInputDiv>
              <EmailInput disabled placeholder={userEmail}></EmailInput>
            </EmailInputDiv>

            <ButtonDiv>
              <Button disabled={text.length < 1} onClick={handleConfirmButton}>
                <ConfirmPont>변경</ConfirmPont>
              </Button>
          </ButtonDiv>

        </Container3>

        </Container2>
      </Container>
        
      </>
    );
};
  
export default WebMyPage;
  
  // theme 파일 폰트 적용 방법 + style-components 사용
  const Header1 = styled.div`
    font-size: ${(props) => props.theme.Web_fontSizes.Header1};
    font-weight: ${(props) => props.theme.fontWeights.Header1};
    line-height: ${(props) => props.theme.LineHeight.Header1};
    color: ${(props) => props.theme.colors.secondary};
    font-family: "Pretendard";
  `;

const HeaderPont = styled.div`
    color: #FFF;
    font-family: 'Pretendard';
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const IntroduceBoldPont = styled.span`
    color: #FFF;
    font-family: 'Pretendard';
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const IntroducePont = styled.span`
    color: #FFF;
    font-family: 'Pretendard';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
const ConfirmPont = styled.span`
  color: var(--White, var(--Grey_Scale-0, #FFF));
  font-family: 'Pretendard';
  font-size: ${({ theme }) => theme.Web_fontSizes.Header2};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.Body2};
  line-height: normal;
`;

const Container =styled.div`
  display: flex;
  justify-content: center;
`;
const Container2 = styled.div`
  width:50vw;
  height: 81vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
`;
const Container3 = styled.div`
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.30);
    background: rgba(255, 255, 255, 0.10);
    box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.10) inset, 25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.10) inset;
    backdrop-filter: blur(25.366666793823242px);
    width:50vw;
    height: 71vh;
    padding: 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const IntroduceDiv = styled.div`
    width: 73%;
    height: 5%;
    margin-top: 6%;
`;
const InputDiv = styled.div`
    width: 73%;
    height: 10%;
    padding:0;
    margin-top: 5%;
`;
const InputName = styled.input`
  border-radius: 10px;
  border: 1.5px solid var(--White, #FFF);
  width:100%;
  height:100%;
  flex-shrink: 0;
  background-color: transparent;
  color: var(--Grey_Scale-0, #FFF);
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 4%;
  &::placeholder {
    color: var(--Gray-10, #ABABAB);
    font-family: 'Pretendard';
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;  
  }
`;
const Counter = ({value, maxLength}) => (
    <span style={{
      color: 'var(--Grey_Scale-0, #FFF)',
      fontFamily: 'Pretendard',
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      marginLeft:'-17%'}}>
      {value.length}/{maxLength}글자
    </span>
);
const NameDiv =styled.div`
  width: 73%;
  height: 5%;
  margin-top: 52px;
`;
const EmailDiv = styled.div`
  width: 73%;
  height: 5%;
  margin-top: 8%;
`;
const EmailInputDiv = styled.div`
  width:73%;
  height: 10%;
  margin-top: 5%;
`;
const EmailInput = styled.input`
  border-radius: 10px;
  border: none;
  width:100%;
  height:100%;
  background-color: transparent;
  color: var(--Grey_Scale-0, #FFF);
  padding-left: 4%;
  &::placeholder {
    color: var(--White, #FFF);
    font-family: 'Pretendard';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal; 
  }
  &:disabled {
    border-radius: 10px;
    background: var(--Gray-10, #ABABAB);
  }
`;
const ButtonDiv =styled.div`
  width: 73%;
  height: 5%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5%;
`;
const Button = styled.button`
  width: 113px;
  height: 55px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.20);
  background-color: #8F2EFF;
  cursor:pointer;
  box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.10) inset, 25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.10) inset;
  backdrop-filter: blur(25.366666793823242px);
  &:disabled{
    opacity: 0.5;
    background-color: rgba(255, 255, 255, 0.10);
  }
  &:disabled:hover{
    background-color: #2B2D36;
  }
  &:hover{
    background-color: #7925D1;
  }
`;