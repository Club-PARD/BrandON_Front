import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./Page/AboutPage";
import HomePage from "./Page/HomePage";
import HistoryPage from "./Page/HistoryPage";
import ScrollToTop from "./ScrollToTop";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./Style/theme";
import styled from "styled-components";
import TopNavBar from "./Components/Web/common/TopNavBar.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Container>
          <ScrollToTop />
          <TopNavBar />
          <Main>
            <Routes>
              {/* 기본 화면 설정 */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/history" element={<HistoryPage />} />
            </Routes>
          </Main>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  padding: 28px;
`;
