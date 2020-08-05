import React from "react";
import ReactDOM from "react-dom";

import { Controls, Form, List } from "./features";
import "./styles.css";

function App() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <Form />
      <List />
      <Controls />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
