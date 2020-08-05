import React from "react";
import { useStore } from "effector-react";

import { formInput } from "../store";

const AddTodo = ({ addTodo }) => {
  const text = useStore(formInput);
  return (
    <input
      type="text"
      tyope="button"
      value="add todo"
      disabled={text.length === 0}
      onClick={() => addTodo(text)}
    />
  );
};

export default AddTodo;
