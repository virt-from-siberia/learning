import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const nav = {
  main: "./index",
  about: "./about",
  price: "./price",
  hello: "./hello"
};

ReactDOM.render(
  <App title="My Site 1" hero="go go go" nav={nav} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
