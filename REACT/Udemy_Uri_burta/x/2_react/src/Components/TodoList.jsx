import React from "react";
import ToDoListItem from "./ToDoListItem";
import "./todoList.css";

const ToDoList = ({ todos }) => {
  const elements = todos.map((item, index) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <ToDoListItem {...itemProps} />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default ToDoList;
