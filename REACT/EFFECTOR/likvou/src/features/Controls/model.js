import { createEvent, createStore } from "effector";

import { VISIBILITY_FILTERS } from "../constants";

export const setFilter = createEvent("setFilter");

export const $visibilityFilter = createStore(VISIBILITY_FILTERS.ALL) //
  .on(setFilter, (state, filter) => filter);
