import React from "react";
import { useMediaQuery } from "react-responsive";
import WebName from "./Components/Web/WebName";
import AppName from "./Components/App/AppName";

const NamePage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppName />
        </div>
      ) : (
        <div>
          <WebName />
        </div>
      )}
    </>
  );
};

export default NamePage;
