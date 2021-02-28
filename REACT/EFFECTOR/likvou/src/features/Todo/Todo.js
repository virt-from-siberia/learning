import React from "react";
import { createComponent } from "effector-react";
import cx from "classnames";

import { initiateStore } from "./model";

export const Todo = createComponent(
  initiateStore, // initialProps => initiateStore(initialProps)
  ({ id, toggleTodo }, { content, completed } = {}) => (
    <li className="todo-item" onClick={() => toggleTodo(id)}>
      {completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          completed && "todo-item__text--completed"
        )}
      >
        {content}
      </span>
    </li>
  )
);
