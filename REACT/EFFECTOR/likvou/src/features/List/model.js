import { createEvent, createStore, combine, forward } from "effector";

import { VISIBILITY_FILTERS } from "../constants";

export const addTodo = createEvent();
export const toggleTodo = createEvent();

export const $todosIds = createStore([]) //
  .on(addTodo, (state, { id }) => [...state, id]);

export const $todosContent = createStore({}) //
  .on(addTodo, (state, { id, content }) => ({
    ...state,
    [id]: content
  }));

export const $todosCompleted = createStore({}) //
  .on(addTodo, (state, { id }) => ({ ...state, [id]: false }))
  .on(toggleTodo, (state, id) => ({
    ...state,
    [id]: !state[id]
  }));

export const $todosIdsVisible = createStore([]);

let nextTodoId = 0;
// TODO: clearNode
export const initiateStore = ({ $visibilityFilter, submiteForm }) => {
  forward({
    to: addTodo,
    from: submiteForm.map(content => ({
      id: ++nextTodoId,
      content
    }))
  });

  forward({
    to: $todosIdsVisible,
    from: combine(
      $todosIds,
      $todosCompleted,
      $visibilityFilter,
      (todosIds, todosCompleted, visibilityFilter) => {
        switch (visibilityFilter) {
          case VISIBILITY_FILTERS.COMPLETED:
            return todosIds.filter(id => todosCompleted[id]);
          case VISIBILITY_FILTERS.INCOMPLETE:
            return todosIds.filter(id => !todosCompleted[id]);
          case VISIBILITY_FILTERS.ALL:
          default:
            return todosIds;
        }
      }
    )
  });

  return $todosIdsVisible;
};
