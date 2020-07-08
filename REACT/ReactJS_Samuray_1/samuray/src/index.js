import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addPost } from "./redux/state";
import { updateNewPostText } from "./redux/state";
import { BrowserRouter as Router } from "react-router-dom";
import { subscribe } from "./redux/state";
import state from "./redux/state";

import "./index.css";

let rerenderEntireTree = () => {
  console.log(subscribe);

  ReactDOM.render(
    <Router>
      <React.StrictMode>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </Router>,
    document.getElementById("root")
  );
};

rerenderEntireTree();

subscribe(rerenderEntireTree);
