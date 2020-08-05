import React from "react";

import { useStore } from "effector-react";
import { formInput } from "../store";

export const Form = ({ children, addTodo }) => {
  const text = useStore(formInput);
  return (
    <form
      className="form"
      onSubmit={e => {
        e.preventDefault();
        if (text.length > 0) addTodo(text);
      }}
    >
      {children}
    </form>
  );
};
