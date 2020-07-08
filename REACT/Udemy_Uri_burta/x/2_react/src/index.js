import React from "react";
import ReactDOM from "react-dom";
import Time from "./Components/Time";
import ToDoList from "./Components/TodoList";
import AppHeader from "./Components/header";
import SearchPanel from "./Components/searchPanel";

const App = () => {
  const todoData = [
    { label: "Drink coffe", important: false, id: 1 },
    { label: "Make awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 }
  ];
  return (
    <React.Fragment>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={todoData} />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
