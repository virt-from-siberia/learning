import React, { useEffect } from "react";
import { createComponent } from "effector-react";

import { Todo } from "../Todo";
import {
  toggleTodo,
  $todosContent,
  $todosCompleted,
  initiateStore
} from "./model";

export const List = createComponent(
  initiateStore, //
  (props, list) => (
    <ul className="todo-list">
      {list.length
        ? list.map(id => (
            <Todo
              key={id}
              id={id}
              toggleTodo={toggleTodo}
              $todosContent={$todosContent}
              $todosCompleted={$todosCompleted}
            />
          ))
        : "No todos, yay!"}
    </ul>
  )
);
