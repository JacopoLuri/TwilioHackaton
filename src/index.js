import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./context/Context";
import { GlobalStyle } from "./data/GlobalStyle";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
