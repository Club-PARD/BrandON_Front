import { Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import HomePage from "../Page/Home";
import ChatPage from "../Page/Chat";
import HistoryPage from "../Page/History";
import LoadingPage from "../Page/Loading";
import TopNavBar from "../common/TopNavBar";
import styled from "styled-components";
import NamePage from "../Page/Name";
import { useEffect, useState } from "react";
import OutputPage from "../Page/Output";
import WebCheck from "../Page/Name/Components/Web/WebCheck";
import MyPage from "../Page/MyPage";

const Router = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container home={pathname === "/"}>
      <ScrollToTop />
      {pathname === "/loading" || pathname === "/name" || pathname === "/check"? null : (
        <TopNavBar isScrolled={isScrolled} />
      )}
      <Main>
        <Routes>
          {/* 기본 화면 설정 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/name" element={<NamePage />} />
          <Route path="/check" element={<WebCheck />} />
          <Route path="/output" element={<OutputPage />} />
          <Route path="/mypage" element={<MyPage/>} />
        </Routes>
      </Main>
    </Container>
  );
};

export default Router;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: ${(props) =>
    props.home ? `url("magenta.gif")` : `url("Background_Final.png")`};
  background-attachment: fixed;
  background-size: cover;
`;

const Main = styled.div`
  flex: 1;
  margin-top: 72px;
`;
