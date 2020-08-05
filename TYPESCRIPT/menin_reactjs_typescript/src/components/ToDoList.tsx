import React from "react";
import { ITodo } from "../interfaces";

type TodoListPropsTYPE = {
  todos: Array<ITodo>;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListPropsTYPE> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  if (!todos.length) {
    return <p className='center mt2 '>Нет записей</p>;
  }

  const removeHandler = (evt: React.MouseEvent, id: number) => {
    evt.preventDefault();
    onRemove(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];

        if (todo.complited) {
          classes.push("complited");
        }

        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type='checkbox'
                checked={todo.complited}
                onChange={() => onToggle(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className='material-icons red-text'
                onClick={(evt) => removeHandler(evt, todo.id)}
              >
                delete_forever
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
