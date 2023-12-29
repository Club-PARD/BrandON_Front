import React from "react";
import styled from "styled-components";

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <Header4>나 이해도</Header4>
      <div style={{ height: "10px" }} />
      <Row>
        <div
          style={{
            width: "90%",
            borderRadius: `var(--text-field-blur, 100px)`,
            background: `var(--ver-2-text-field, rgba(255, 255, 255, 0.10))`,
            backdropFilter: `blur(50px)`,
            height: "1.6875rem",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              background: "white",
              height: "100%",
              borderRadius: 50,
              transition: "width 1s",
            }}
          ></div>
        </div>
        <Header3>{progress}%</Header3>
      </Row>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  width: 58.75rem;
  padding: 0.5625rem 1.25rem;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Header4 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header4};
  font-weight: ${({ theme }) => theme.fontWeights.Header4};
  font-family: "Pretendard";
`;

const Header3 = styled.div`
  font-size: ${({ theme }) => theme.Web_fontSizes.Header3};
  font-weight: ${({ theme }) => theme.fontWeights.Header3};
  font-family: "Pretendard";
`;
