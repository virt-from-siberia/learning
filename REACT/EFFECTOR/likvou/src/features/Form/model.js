import { createEvent, createStore } from "effector";

export const changeInput = createEvent();
export const submiteForm = createEvent();

export const $input = createStore("")
  .on(changeInput, (state, payload) => payload)
  .reset(submiteForm);
