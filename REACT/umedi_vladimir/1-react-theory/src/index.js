import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

const app = (
  <BrowserRouter>
    <App title={"I am from props"} />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
