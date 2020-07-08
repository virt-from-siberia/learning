import React, { useContext } from "react";
// TODO: ПОДКЛЮЧЕНИЕ ВАЛИДАТОРА
import propTypes from "prop-types";
import Context from "../context";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px , 10px!important",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem"
  },
  input: {
    marginRight: "1rem"
  }
};

function TodoItem({ todo, index, changeCheckBox }) {
  console.log("todo", todo);

  const { removeTodo } = useContext(Context);

  const cli = [""];
  if (todo.complited) {
    cli.push("done");
  }

  return (
    <li style={styles.li}>
      <span className={cli.join(" ")}>
        <input
          type="checkbox"
          checked={todo.complited}
          style={styles.input}
          onChange={() => {
            changeCheckBox(todo.id);
          }}
        ></input>
        <strong>{index + 1 + " "}</strong>
        {todo.title}
      </span>
      <button
        className="rm"
        onClick={() => {
          removeTodo(todo.id);
        }}
      >
        &times;
      </button>
    </li>
  );
}

// TODO: ВАЛИДАЦИЯ ВХОДЯЩИХ ПАРАМЕТРОВ
TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
  index: propTypes.number.isRequired,
  changeCheckBox: propTypes.func.isRequired
};

export default TodoItem;
