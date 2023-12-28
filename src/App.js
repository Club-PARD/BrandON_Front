import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./Style/theme";
import Router from "./Router/Router";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId = '739066028299-o49nb40i15jpnoj2j92qtm4h89hs1r6j.apps.googleusercontent.com';

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
