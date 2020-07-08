import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);

const application = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(application, document.getElementById("root"));
registerServiceWorker();
