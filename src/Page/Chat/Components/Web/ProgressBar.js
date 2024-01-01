import React from "react";
import styled from "styled-components";

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Row>
        <Caption2>나 이해도</Caption2>
        <div style={{ width: "8px" }} />
        <div
          style={{
            width: "18.75rem",
            borderRadius: "300px",
            background: `var(--ver-2-text-field, rgba(255, 255, 255, 0.10))`,
            backdropFilter: `blur(50px)`,
            height: "0.5rem",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              background: "#8F2EFF",
              height: "100%",
              borderRadius: 50,
              transition: "width 1s",
            }}
          ></div>
        </div>
        <Body3>{progress}%</Body3>
      </Row>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 72px;
  left: calc(50vw - 238px);
  width: 476px;
  padding: 18px 34px;
  border-radius: 300px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Caption2 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Caption2};
  font-weight: ${({ theme }) => theme.fontWeights.Caption2};
  font-family: "Pretendard";
`;

const Body3 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Body3};
  font-weight: ${({ theme }) => theme.fontWeights.Body3};
  font-family: "Pretendard";
`;
