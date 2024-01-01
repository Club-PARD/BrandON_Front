import React from "react";
import styled from "styled-components";
import inputDisabled from "../../../../Assets/input_disabled.svg";
import inputEnabled from "../../../../Assets/input_enabled.svg";
import { InputBase, Paper, Tooltip } from "@mui/material";

const Input = ({
  input,
  setInput,
  handleSubmit,
  wrapCount,
  setWrapCount,
  progress,
}) => {
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

  return (
    <>
      <Tooltip
        title="주어진 모든 질문을 완료해야 분석할 수 있어요."
        arrow
        placement="top"
      >
        <FloatingButton
          disabled={progress < 100}
          style={
            progress < 100
              ? { background: "#ABABAB", cursor: "not-allowed" }
              : { cursor: "pointer" }
          }
          wrapCount={wrapCount}
        >
          ✨ 분석 시작
        </FloatingButton>
      </Tooltip>
      <Paper
        component="form"
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "56.25rem",
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
          multiline
          maxRows={4}
          onKeyDown={handleKeyDown}
          placeholder="Message Brandon..."
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
  position: fixed;
  bottom: calc(
    90px + ${(props) => (props.wrapCount ? props.wrapCount : 0)} * 20px
  );
  right: calc(175px + (100vw - 1250px) / 2);
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.625rem;
  background: #8f2eff;
  box-shadow: 0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.4) inset,
    0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.2) inset,
    0rem 0.25rem 11.25rem 0rem #8f2eff;
`;
