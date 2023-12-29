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
          borderRadius: "10px",
          border: "2px solid #D2D2D2",
          overflow: "hidden",
          backgroundColor: `rgba(255, 255, 255, 0.10)`,
          zIndex: 3,
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
            fontWeight: "bold",
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
    5.3125rem + ${(props) => (props.wrapCount ? props.wrapCount : 0)} *
      0.9375rem
  );
  right: 14vw;
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
