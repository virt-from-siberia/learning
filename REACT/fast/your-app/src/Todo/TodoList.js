import React from "react";
// TODO: ПОДКЛЮЧЕНИЕ ВАЛИДАТОРА
import propTypes from "prop-types";
import TodoItem from "./TodoItem";
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            changeCheckBox={props.onToggleCheckBox}
          />
        );
      })}
    </ul>
  );
}
// TODO: ВАЛИДАЦИЯ ВХОДЯЩИХ ПАРАМЕТРОВ
TodoList.propTypes = {
  todos: propTypes.arrayOf(propTypes.object).isRequired,
  onToggleCheckBox: propTypes.func.isRequired
};

export default TodoList;
