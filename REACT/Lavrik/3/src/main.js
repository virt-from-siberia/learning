import React from "react";
import ReactDom from "react-dom";
import App from "./app.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import App from "./app -simple.js";
// import AppOld from './appDerived.js';

ReactDom.render(<App />, document.querySelector("#app"));
