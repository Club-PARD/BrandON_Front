import React from "react";
import { useMediaQuery } from "react-responsive";
import AppLoading from "../Components/App/App_Loading_Components/AppLoading"
import WebLoading from "../Components/Web/Web_Loading_Components/WebLoading";

const LoadingPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppLoading />
        </div>
      ) : (
        <div>
          <WebLoading />
        </div>
      )}
    </>
  );
};

export default LoadingPage;