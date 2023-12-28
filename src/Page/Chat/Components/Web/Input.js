import React from "react";
import styled from "styled-components";
import inputDisabled from "../../../../Assets/input_disabled.svg";
import inputEnabled from "../../../../Assets/input_enabled.svg";
import { InputBase, Paper } from "@mui/material";

const Input = ({ input, setInput, handleSubmit }) => {
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

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "56.25rem",
        borderRadius: "10px",
        border: "2px solid #FFFFFF",
        overflow: "hidden",
        backgroundColor: "transparent",
        zIndex: 3,
      }}
    >
      <InputBase
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
  );
};

export default Input;

const Button = styled.button`
  all: unset;
  margin: 10px;
`;
