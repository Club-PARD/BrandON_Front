import React from "react";
import styled from "styled-components";
import inputDisabled from "../../../../Assets/input_disabled.svg";
import inputEnabled from "../../../../Assets/input_enabled.svg";

const Input = ({ input, setInput, handleSubmit }) => {
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <InputText
        placeholder="입력하라"
        value={input}
        onChange={handleOnChange}
      />
      <Button
        style={{ position: "absolute", top: 0, right: 20, height: "100%" }}
        onClick={input.length === 0 ? () => {} : () => handleSubmit}
      >
        {input.length === 0 ? (
          <img src={inputDisabled} alt="입력 불가" />
        ) : (
          <img src={inputEnabled} alt="입력" />
        )}
      </Button>
    </div>
  );
};

export default Input;

const InputText = styled.input`
  all: unset;
  width: 860px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid var(--stroke, #d2d2d2);
`;

const Button = styled.button`
  all: unset;
`;
