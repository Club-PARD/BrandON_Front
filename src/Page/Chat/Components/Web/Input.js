import React, { useEffect, useState } from "react";
import styled from "styled-components";
import inputDisabled from "../../../../Assets/input_disabled.svg";
import inputEnabled from "../../../../Assets/input_enabled.svg";
import { InputBase, Paper } from "@mui/material";

const Input = ({ input, setInput, handleSubmit }) => {
  const [wrapCount, setWrapCount] = useState(0);

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
      handleSubmit();
      // 여기에서 추가적인 동작을 수행하거나 아무것도 하지 않음
    }
  };

  useEffect(() => {
    const inputElement = document.getElementById("myInput"); // 'myInput'은 InputBase에 적용된 id입니다.
    const computedStyle = window.getComputedStyle(inputElement);
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const contentHeight = inputElement.scrollHeight;
    const numberOfLines = Math.floor(contentHeight / lineHeight);

    // 이전 행 수와 비교하여 wrap 여부 및 횟수 감지
    if (numberOfLines > 4) {
      setWrapCount(3);
    } else if (numberOfLines > 1) {
      const newWrapCount = numberOfLines - 1;
      setWrapCount(newWrapCount);
    } else {
      setWrapCount(0);
    }
  }, [input]);

  return (
    <>
      <FloatingButton wrapCount={wrapCount}>분석 시작</FloatingButton>
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
  margin: 10px;
`;

const FloatingButton = styled.button`
  z-index: 10;
  position: fixed;
  bottom: calc(
    85px + ${(props) => (props.wrapCount ? props.wrapCount : 0)} * 15px
  );
  right: 180px;
  color: #fff;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 10px;
  background: #8f2eff;
  box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.4) inset,
    0px -1px 0px 0px rgba(0, 0, 0, 0.2) inset, 0px 4px 180px 0px #8f2eff;
`;
