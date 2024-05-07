import React from "react";
import styled from "styled-components";
import inputDisabled from "../../../../Assets/input_disabled.svg";
import inputEnabled from "../../../../Assets/input_enabled.svg";
import { InputBase, Paper, Tooltip } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Input = ({
  input,
  setInput,
  handleSubmit,
  wrapCount,
  setWrapCount,
  progress,
  isLoading,
}) => {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID");
  const chatRoomId = localStorage.getItem("chatRoomID");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (event) => {
    // Enter 키가 눌리고 Shift 키도 눌려있을 때
    if (event.key === "Enter" && event.shiftKey) {
      // 텍스트에 줄 바꿈 문자를 추가
      input += "\n";
    }

    // Enter 키가 눌렸을 때
    else if (event.key === "Enter") {
      // 기본 동작을 방지
      event.preventDefault();
      if (input !== "") {
        handleSubmit();
      }
      // 여기에서 추가적인 동작을 수행하거나 아무것도 하지 않음
    }
  };

  const handleOnInput = () => {
    const inputElement = document.getElementById("myInput"); // 'myInput'은 InputBase에 적용된 id입니다.
    const computedStyle = window.getComputedStyle(inputElement);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const contentHeight = inputElement.scrollHeight;
    const numberOfLines = contentHeight / lineHeight;

    // 이전 행 수와 비교하여 wrap 여부 및 횟수 감지
    if (numberOfLines >= 4) {
      setWrapCount(3);
    } else if (numberOfLines === 3) {
      setWrapCount(2);
    } else if (numberOfLines === 2) {
      setWrapCount(1);
    } else {
      setWrapCount(0);
    }
  };

  const handleAnalyticsClick = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_URL + `/${userID}/${chatRoomId}/finishChat`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log("chatRoom:", response.data); //response.data = chatRoomAnswers
    } catch (error) {
      // console.error("서버 요청 에러:", error);
      alert("서버 요청에 실패하였습니다.");
      navigate("/");
    }

    navigate("/loading");
  };

  return (
    <>
      <Tooltip
        title="주어진 모든 질문을 완료해야 분석할 수 있어요."
        arrow
        placement="top"
      >
        <FloatingButton
          disabled={progress < 100}
          onClick={handleAnalyticsClick}
          style={
            progress < 100
              ? {
                  backgroundColor: `rgba(255, 255, 255, 0.10)`,
                  border: `1px solid rgba(255, 255, 255, 0.30)`,
                  backdropFilter: `blur(25.366666793823242px)`,
                  cursor: "not-allowed",
                  color: "#D2D2D2",
                }
              : { cursor: "pointer" }
          }
          wrapCount={wrapCount}
        >
          {progress < 100 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11.0002 1.83325C5.93741 1.83325 1.8335 5.93717 1.8335 10.9999C1.8335 16.0627 5.93741 20.1666 11.0002 20.1666C16.0629 20.1666 20.1668 16.0627 20.1668 10.9999C20.1668 5.93717 16.0629 1.83325 11.0002 1.83325ZM10.0835 8.02075V13.9791C10.0835 14.1614 10.0111 14.3363 9.88213 14.4652C9.7532 14.5942 9.57833 14.6666 9.396 14.6666C9.21366 14.6666 9.03879 14.5942 8.90986 14.4652C8.78093 14.3363 8.7085 14.1614 8.7085 13.9791V8.02075C8.7085 7.83842 8.78093 7.66355 8.90986 7.53462C9.03879 7.40568 9.21366 7.33325 9.396 7.33325C9.57833 7.33325 9.7532 7.40568 9.88213 7.53462C10.0111 7.66355 10.0835 7.83842 10.0835 8.02075ZM15.5835 8.02075V13.9791C15.5835 14.1614 15.5111 14.3363 15.3821 14.4652C15.2532 14.5942 15.0783 14.6666 14.896 14.6666C14.7137 14.6666 14.5388 14.5942 14.4099 14.4652C14.2809 14.3363 14.2085 14.1614 14.2085 13.9791V8.02075C14.2085 7.83842 14.2809 7.66355 14.4099 7.53462C14.5388 7.40568 14.7137 7.33325 14.896 7.33325C15.0783 7.33325 15.2532 7.40568 15.3821 7.53462C15.5111 7.66355 15.5835 7.83842 15.5835 8.02075ZM12.8335 9.39575V12.6041C12.8335 12.7864 12.7611 12.9613 12.6321 13.0902C12.5032 13.2192 12.3283 13.2916 12.146 13.2916C11.9637 13.2916 11.7888 13.2192 11.6599 13.0902C11.5309 12.9613 11.4585 12.7864 11.4585 12.6041V9.39575C11.4585 9.21342 11.5309 9.03855 11.6599 8.90962C11.7888 8.78068 11.9637 8.70825 12.146 8.70825C12.3283 8.70825 12.5032 8.78068 12.6321 8.90962C12.7611 9.03855 12.8335 9.21342 12.8335 9.39575ZM7.3335 9.85408V12.1458C7.3335 12.3281 7.26106 12.503 7.13213 12.6319C7.0032 12.7608 6.82833 12.8333 6.646 12.8333C6.46366 12.8333 6.28879 12.7608 6.15986 12.6319C6.03093 12.503 5.9585 12.3281 5.9585 12.1458V9.85408C5.9585 9.67175 6.03093 9.49688 6.15986 9.36795C6.28879 9.23902 6.46366 9.16658 6.646 9.16658C6.82833 9.16658 7.0032 9.23902 7.13213 9.36795C7.26106 9.49688 7.3335 9.67175 7.3335 9.85408Z"
                fill="#D2D2D2"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11.0002 1.83325C5.93741 1.83325 1.8335 5.93717 1.8335 10.9999C1.8335 16.0627 5.93741 20.1666 11.0002 20.1666C16.0629 20.1666 20.1668 16.0627 20.1668 10.9999C20.1668 5.93717 16.0629 1.83325 11.0002 1.83325ZM10.0835 8.02075V13.9791C10.0835 14.1614 10.0111 14.3363 9.88213 14.4652C9.7532 14.5942 9.57833 14.6666 9.396 14.6666C9.21366 14.6666 9.03879 14.5942 8.90986 14.4652C8.78093 14.3363 8.7085 14.1614 8.7085 13.9791V8.02075C8.7085 7.83842 8.78093 7.66355 8.90986 7.53462C9.03879 7.40568 9.21366 7.33325 9.396 7.33325C9.57833 7.33325 9.7532 7.40568 9.88213 7.53462C10.0111 7.66355 10.0835 7.83842 10.0835 8.02075ZM15.5835 8.02075V13.9791C15.5835 14.1614 15.5111 14.3363 15.3821 14.4652C15.2532 14.5942 15.0783 14.6666 14.896 14.6666C14.7137 14.6666 14.5388 14.5942 14.4099 14.4652C14.2809 14.3363 14.2085 14.1614 14.2085 13.9791V8.02075C14.2085 7.83842 14.2809 7.66355 14.4099 7.53462C14.5388 7.40568 14.7137 7.33325 14.896 7.33325C15.0783 7.33325 15.2532 7.40568 15.3821 7.53462C15.5111 7.66355 15.5835 7.83842 15.5835 8.02075ZM12.8335 9.39575V12.6041C12.8335 12.7864 12.7611 12.9613 12.6321 13.0902C12.5032 13.2192 12.3283 13.2916 12.146 13.2916C11.9637 13.2916 11.7888 13.2192 11.6599 13.0902C11.5309 12.9613 11.4585 12.7864 11.4585 12.6041V9.39575C11.4585 9.21342 11.5309 9.03855 11.6599 8.90962C11.7888 8.78068 11.9637 8.70825 12.146 8.70825C12.3283 8.70825 12.5032 8.78068 12.6321 8.90962C12.7611 9.03855 12.8335 9.21342 12.8335 9.39575ZM7.3335 9.85408V12.1458C7.3335 12.3281 7.26106 12.503 7.13213 12.6319C7.0032 12.7608 6.82833 12.8333 6.646 12.8333C6.46366 12.8333 6.28879 12.7608 6.15986 12.6319C6.03093 12.503 5.9585 12.3281 5.9585 12.1458V9.85408C5.9585 9.67175 6.03093 9.49688 6.15986 9.36795C6.28879 9.23902 6.46366 9.16658 6.646 9.16658C6.82833 9.16658 7.0032 9.23902 7.13213 9.36795C7.26106 9.49688 7.3335 9.67175 7.3335 9.85408Z"
                fill="white"
              />
            </svg>
          )}
          &nbsp;분석 시작
        </FloatingButton>
      </Tooltip>
      <Paper
        component="form"
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "56.25rem",
          padding: "0 5px",
          zIndex: 3,
          borderRadius: "10px",
          border: "none",
          position: "relative",
          letterSpacing: "1px",
          background:
            input === ""
              ? "linear-gradient(#D2D2D2, #D2D2D2),  linear-gradient(#D2D2D2, #D2D2D2)"
              : "linear-gradient(to right, #009FFF 0%, #9D48FF 39.68%, #EC2F4B 66.69%, #FF43B4 100%), linear-gradient(to right, #009FFF 0%, #9D48FF 39.68%, #EC2F4B 66.69%, #FF43B4 100%)",
          backgroundPosition: "10px 0, 10px 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "calc(100% - 10px - 10px) 2px",

          "&:before": {
            content: '""',
            position: "absolute",
            display: "block",
            width: "10px",
            top: 0,
            bottom: 0,
            left: 0,
            border: input === "" ? "2px solid #D2D2D2" : "2px solid #009FFF",
            borderTopLeftRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderRightColor: "transparent",
          },

          "&:after": {
            content: '""',
            position: "absolute",
            display: "block",
            width: "10px",
            top: 0,
            bottom: 0,
            right: 0,
            border: input === "" ? "2px solid #D2D2D2" : "2px solid #FF43B4",
            borderTopRightRadius: "10px",
            borderBottomRightRadius: "10px",
            borderLeftColor: "transparent",
          },
        }}
      >
        <InputBase
          id="myInput"
          disabled={isLoading}
          multiline
          maxRows={4}
          onKeyDown={handleKeyDown}
          placeholder="구체적이고 다양한 답변을 작성할수록 Brandon의 분석 정확도가 높아져요."
          value={input}
          onChange={handleInputChange}
          onInput={handleOnInput}
          sx={{
            ml: 1,
            flex: 1,
            fontSize: "1rem",
            color: "white",
            textAlign: "right",
            backgroundColor: "transparent",
          }}
        />
        <Button disabled={input === ""} onClick={handleSubmit}>
          {input === "" ? (
            <img src={inputDisabled} alt="입력 불가" />
          ) : (
            <img src={inputEnabled} alt="입력" />
          )}
        </Button>
      </Paper>
    </>
  );
};

export default Input;

const Button = styled.button`
  all: unset;
  margin: 0.625rem;
`;

const FloatingButton = styled.button`
  z-index: 10;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: calc(
    (5.625rem + (100vh - 43.75rem) / 8) +
      (${(props) => (props.wrapCount ? props.wrapCount : 0)} * 17px)
  );
  right: calc(10.9375rem + (100vw - 78.125rem) / 2);
  color: #fff;
  border: 1px solid #8f2eff;
  padding: 8px 16px 8px 12px;
  font-size: 1rem;
  border-radius: 10px;
  background-color: var(--Primary, #8f2eff);
  font-weight: 700;

  &:hover {
    background-color: #7925d1;
    border-color: #7925d1;
  }
`;
