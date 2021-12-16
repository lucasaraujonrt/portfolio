import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Introduction from "./view/Introduction/Introduction";
import AboutMe from "./view/AboutMe/AboutMe";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
  }

  a:visited {
    color: transparent;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Introduction />
      <AboutMe />
      <Introduction />
    </>
  );
}

export default App;
