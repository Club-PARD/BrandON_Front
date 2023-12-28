import React from "react";
import styled from "styled-components";
import inputDisabled from "../../../../Assets/input_disabled.svg";
import inputEnabled from "../../../../Assets/input_enabled.svg";
import { InputBase, Paper } from "@mui/material";

const Input = ({ input, setInput, handleSubmit }) => {
  const handleInputChange = (e) => {
    setInput(e.target.value);
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
      <Button
        disabled={input === ""}
        onClick={input === "" ? () => {} : handleSubmit}
      >
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
