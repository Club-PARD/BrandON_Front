import React from "react";
import { useMediaQuery } from "react-responsive";
import AppError404 from "./Components/App/AppError404";
import WebError404 from "./Components/Web/WebError404";

const Error404Page = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppError404 />
        </div>
      ) : (
        <div>
          <WebError404 />
        </div>
      )}
    </>
  );
};

export default Error404Page;
