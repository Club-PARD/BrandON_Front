import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./Style/theme";
import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId = process.env.REACT_APP_CLIENT_ID;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
