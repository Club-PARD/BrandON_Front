import React from "react";
import { useMediaQuery } from "react-responsive";
import AppOutput from "./Components/App/AppOutput";
import WebOutput from "./Components/Web/WebOutput";

const OutputPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:1023px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppOutput />
        </div>
      ) : (
        <div>
          <WebOutput />
        </div>
      )}
    </>
  );
};

export default OutputPage;
