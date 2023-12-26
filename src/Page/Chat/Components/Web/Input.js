import React from "react";
import styled from "styled-components";

const Input = () => {
  return <InputText placeholder="입력하라"></InputText>;
};

export default Input;

const InputText = styled.input`
  all: unset;
  width: 900px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid var(--stroke, #d2d2d2);
`;
