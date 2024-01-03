import React from "react";
import styled from "styled-components";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const WebCheck = () => {

    const navigate = useNavigate();
    const [allCheckBox,setAllCheckBox] = useState(false);
    const [checkBox1,setCheckBox1] = useState(false);
    const [checkBox2,setCheckBox2] = useState(false);

    const allCheck = () => {
        setAllCheckBox(!allCheckBox);
        setCheckBox1(!allCheckBox);
        setCheckBox2(!allCheckBox);
    };
    const check1 = () => {
        setCheckBox1(!checkBox1);
    };
    const check2 = () => {
        setCheckBox2(!checkBox2);
    };

    const isAbleButton = () => {
        return !(checkBox1 && checkBox2 && allCheckBox);
    };    

    const clickConfirmButton = () => {
        navigate("/");
    };

    useEffect(() => {
        if (localStorage.getItem("accessToken") === null) {
          alert("로그인이 필요합니다.");
          navigate("/");
        }
      }, []);
    
    useEffect(() => {
        if (checkBox1 && checkBox2) {
            setAllCheckBox(true);
        } else {
            setAllCheckBox(false);
        }
      }, [checkBox1, checkBox2]);

    return(
        <>
        <Container>
            <Container2>
                <HeaderDiv>
                    <HeaderPont>Brand ON 서비스 약관 동의</HeaderPont>
                    <SubHeaderPont>서비스의 이용을 위한 최초 1회의 약관 동의와 
                    개인정보 수집에 대한 동의가 필요합니다.</SubHeaderPont>
                </HeaderDiv>

                <AgreeDiv>
                    <label htmlFor="allCheck">
                        <CheckBox type="checkbox" checked={allCheckBox} onChange={allCheck}></CheckBox>
                    </label>
                    <AllAgreePont>
                        전체동의
                    </AllAgreePont>
                </AgreeDiv>

                <Line></Line>

                <AgreeDiv2>
                    <label htmlFor="checkBox1">
                        <CheckBox type="checkbox" checked={checkBox1} onChange={check1}></CheckBox>
                    </label>
                    <AgreePont>
                        이용약관 (필수)
                    </AgreePont>

                    <MoreInfo>더보기</MoreInfo>
                </AgreeDiv2>

                <AgreeDiv3>
                    <label htmlFor="checkBox2">
                        <CheckBox type="checkbox" checked={checkBox2} onChange={check2}></CheckBox>
                    </label>
                    <AgreePont>
                        개인정보 수집 및 이용 (필수)
                    </AgreePont>

                    <MoreInfo>더보기</MoreInfo>
                </AgreeDiv3>
                
            </Container2>
            <Confirm onClick={clickConfirmButton} disabled={isAbleButton()}>
                <ConfirmPont>확인</ConfirmPont>
            </Confirm>
        </Container>
        </>
    );
};

export default WebCheck;

const HeaderPont = styled.div`
    color: var(--White, #FFF);
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.Web_fontSizes.Header3};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.Header3};
    line-height: normal;
`;
const SubHeaderPont = styled.span`
    color: var(--stroke, #D2D2D2);
    text-align: center;
    font-family: 'Pretendard';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-top: 13px;
    width: 56%;
    height: 100%;
`;
const AllAgreePont = styled.span`
    color: var(--White, #FFF);
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.Web_fontSizes.Body1};;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-left: 18px;
`;
const AgreePont = styled.div`
    color: var(--White, #FFF);
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.Web_fontSizes.Body1};;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 18px;
    margin-right: auto;
`;
const ConfirmPont = styled.div`
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.Web_fontSizes.Header2};;
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeights.Body2};
    line-height: normal;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Container2 = styled.div`
    width: 31vw;
    height: 45vh;
    display: flex;
    flex-direction: column;
    //justify-content: space-between;
    align-items: center;
    margin-top: 8%; // 수정필요
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.30);
    background: rgba(255, 255, 255, 0.10);
    box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.10) inset, 25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.10) inset, 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(25.366666793823242px);
`;
const Confirm = styled.button`
    width: 31vw;
    height: 6vh;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.30);
    background: #8F2EFF;
    box-shadow: -25.367px 25.367px 25.367px 0px rgba(255, 255, 255, 0.10) inset, 25.367px -25.367px 25.367px 0px rgba(194, 194, 194, 0.10) inset, 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(25.366666793823242px);
    margin-top: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
    color: #FFFFFF;

    &:disabled{
    background-color: rgba(255, 255, 255, 0.10);
    color:#FFFFFF33;
    }
    &:disabled:hover{
        background-color: #2B2D36;
        color:#FFFFFF33;
    }
    &:hover{
        background-color: #7925D1;
    }
`;
const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 9%;
`;
const AgreeDiv = styled.div`
    width: 66%;
    display: flex;
    align-items: center;
    margin-top: 8%;
    //background-color: skyblue;
`;
const CheckBox = styled.input`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    appearance: none;
    border: 2px solid gainsboro;
    border-radius: 0.35rem;
    padding:0;
    display: flex;
    justify-content: center;
    
    &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 24 24' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M10.5952 17C10.3045 17 10.0138 16.8997 9.82007 16.599L5.36332 11.9875C4.87889 11.4862 4.87889 10.7845 5.36332 10.2832C5.84775 9.78196 6.52595 9.78196 7.01038 10.2832L10.5952 13.9925L16.9896 7.37594C17.474 6.87469 18.1522 6.87469 18.6367 7.37594C19.1211 7.87719 19.1211 8.57895 18.6367 9.0802L11.4671 16.4987C11.1765 16.8997 10.8858 17 10.5952 17Z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #8F2EFF;
  }
`;
const Line = styled.div`
    background-color: #D2D2D2;
    width: 66%;
    height: 1px;
    margin-top: 6%;
`;
const AgreeDiv2 = styled.div`
    width: 66%;
    display: flex;
    align-items: center;
    margin-top: 6%;
`;
const AgreeDiv3 = styled.div`
    width: 66%;
    display: flex;
    align-items: center;
    margin-top: 3%;
`;
const MoreInfo = styled.a`
    color: var(--Gray-10, #ABABAB);
    font-family: 'Pretendard';
    font-size: ${({ theme }) => theme.Web_fontSizes.Body1};;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;