import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { addPost } from "./redux/state";
// import { updateNewPostText } from "./redux/state";
import { BrowserRouter as Router } from "react-router-dom";
// import { subscribe } from "./redux/state";
import store from "./redux/state";

import "./index.css";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
      </React.StrictMode>
    </Router>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState);

store.subscribe(rerenderEntireTree);
