import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./context/Context";
import { GlobalStyle } from "./data/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
