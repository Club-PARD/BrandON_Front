import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./Style/theme";
import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
