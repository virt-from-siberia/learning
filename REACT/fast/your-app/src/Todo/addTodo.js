import React, { useState } from "react";
import propTypes from "prop-types";

function useInputValue(dafaultValue = "") {
  const [value, setValue] = useState(dafaultValue);

  return {
    bind: {
      value: value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(""),
    value: () => value
  };
}

function AddTodo({ onCreate }) {
  const input = useInputValue("");

  function SubmitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={SubmitHandler}>
      <input {...input.bind}></input>
      <button type="submit">Add todo</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: propTypes.func.isRequired
};

export default AddTodo;
