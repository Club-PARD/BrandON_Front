import React from "react";
import { useMediaQuery } from "react-responsive";
import AppChat from "./Components/App/AppChat";
import WebChat from "./Components/Web/WebChat";

const ChatPage = () => {
  const isDesktopOrMobile = useMediaQuery({ query: "(max-width:768px)" }); // 758px 이하일 때는 모바일 뷰로 바뀐다.

  return (
    <>
      {isDesktopOrMobile === true ? (
        <div>
          <AppChat />
        </div>
      ) : (
        <div>
          <WebChat />
        </div>
      )}
    </>
  );
};

export default ChatPage;
