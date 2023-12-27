import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 예시로 1초에 한 번씩 10%씩 증가하도록 설정
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress((prevProgress) => prevProgress + 10);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <Container>
      <Header4>나 이해도</Header4>
      <div style={{ height: "10px" }} />
      <Row>
        <div
          style={{
            width: "90%",
            background: "white",
            height: "27px",
            borderRadius: 50,
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              background: "#2B2D36",
              height: "100%",
              borderRadius: 50,
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
  width: 940px;
  padding: 16px 20px;
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
