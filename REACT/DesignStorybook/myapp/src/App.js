import React from "react";
import { ThemeProvider } from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  SignUpModal,
} from "./components";

import { GlobalStyle, darkTheme, defaultTheme } from "./utils";

function App() {
  const [useDarkTheme, setuseDarkTheme] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const toggleHandleTheme = () => {
    setuseDarkTheme(!useDarkTheme);
  };

  const toggleHandleShowModal = () => {
    setShowModal(!showModal);
    console.log("lo");
  };

  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme ? darkTheme : defaultTheme}>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={toggleHandleTheme}
        >
          {useDarkTheme ? "white theme" : "Dark theme"}
        </button>
        <button
          style={{ margin: "0 16px 24px", padding: "8px", background: "none" }}
          onClick={toggleHandleShowModal}
        >
          Toglle Modal
        </button>
        <div
          style={{
            background: useDarkTheme
              ? defaultTheme.primaryColor
              : darkTheme.primaryColor,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <SignUpModal showModal={showModal} setShowModal={setShowModal} />
        </div>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
