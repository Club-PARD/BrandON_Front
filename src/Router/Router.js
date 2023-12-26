import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import HomePage from "../Page/Home";
import ChatPage from "../Page/Chat";
import HistoryPage from "../Page/History";
import LoadingPage from "../Page/Loading";
import TopNavBar from "../common/TopNavBar";
import styled from "styled-components";

const Router = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <ScrollToTop />
      {pathname === "/loading" ? null : <TopNavBar />}
      <Main>
        <Routes>
          {/* 기본 화면 설정 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/loading" element={<LoadingPage />} />
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
  background-image: url("background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = styled.div`
  flex: 1;
  margin-top: 72px;
`;
