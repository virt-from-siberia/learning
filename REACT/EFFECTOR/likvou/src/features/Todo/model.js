import { combine } from "effector";

export const initiateStore = ({ id, $todosContent, $todosCompleted }) => {
  const store = combine({
    content: $todosContent.map((todosContent) => todosContent[id]),
    completed: $todosCompleted.map(
      (todosCompleted) => (console.log(id), todosCompleted[id])
    ),
  });

  return store;
};
