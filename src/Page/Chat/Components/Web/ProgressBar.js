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
      <h1>나 이해도</h1>
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
        <h2>{progress}%</h2>
      </Row>
    </Container>
  );
};

export default ProgressBar;

const Container = styled.div`
  width: 940px;
  padding: 22px 20px;
  border-radius: 0px 0px 20px 20px;
  background: rgba(242, 247, 255, 0.9);
  backdrop-filter: blur(5px);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
