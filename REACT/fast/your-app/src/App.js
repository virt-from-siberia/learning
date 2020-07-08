import React, { useEffect } from "react";
import "./App.css";
import Modal from "./Modal/Modal";
import TodoList from "./Todo/TodoList";
import Context from "./context";
// import AddTodo from "./Todo/addTodo";
import Loader from "./Loader";

const AddTodo = React.lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(import("./Todo/addTodo"));
      }, 3000);
    })
);

function App() {
  // TODO: React.useState возвращяет 2 начения
  //1е todos это само состояние равно дефолтному значению
  // 2е setTodos это функция позволяющия изменять данное состояние что бы react видел это измененное состояние

  let [todos, setTodos] = React.useState([]);
  let [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=15")
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

  function toggleTodo(id) {
    //HACK: setTodos это функция позволяющия изменять данное состояние что бы react видел это измененное состояние
    setTodos(
      todos.map(todo => {
        if (todo.id == id) {
          todo.complited = !todo.complited;
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(
      todos.filter(todo => {
        return todo.id != id;
      })
    );
  }
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title: title,
          id: Date.now(),
          complited: false
        }
      ])
    );
  }

  // JSX:
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggleCheckBox={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
