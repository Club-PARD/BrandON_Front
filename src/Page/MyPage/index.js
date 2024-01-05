import React from "react";
import { useMediaQuery } from "react-responsive";
import AppMyPage from "./Components/App/AppMyPage";
import WebMyPage from "./Components/Web/WebMyPage";

const MyPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:1023px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppMyPage />
        </div>
      ) : (
        <div>
          <WebMyPage />
        </div>
      )}
    </>
  );
};

export default MyPage;
