import React from "react";
import { useMediaQuery } from "react-responsive";
import AppHistory from "./Components/App/AppHistory";
import WebHistory from "./Components/Web/WebHistory";

const HistoryPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppHistory />
        </div>
      ) : (
        <div>
          <WebHistory />
        </div>
      )}
    </>
  );
};

export default HistoryPage;
