import React from "react";
import "./todoList.css";

const ToDoListItem = ({ label, important = false }) => {
  const liStyle = {
    color: important ? "tomato" : "black"
  };
  return (
    <h1>
      <span className="todo-list-item" style={liStyle}>
        {label}
      </span>
    </h1>
  );
};

export default ToDoListItem;
