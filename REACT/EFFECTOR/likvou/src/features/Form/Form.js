import React from "react";
import { createComponent } from "effector-react";

import { $input, changeInput, submiteForm } from "./model";

function handleChange(e) {
  changeInput(e.target.value);
}
function handleSubmite(e) {
  e.preventDefault();
  submiteForm($input.getState());
}

export const Form = createComponent($input, (props, input) => (
  <form onSubmit={handleSubmite}>
    <input onChange={handleChange} value={input} />
    <button className="add-todo" type="submit">
      Add Todo
    </button>
  </form>
));
