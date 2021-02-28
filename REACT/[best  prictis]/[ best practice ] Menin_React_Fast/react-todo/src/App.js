import React, { useState, useEffect } from "react";
import "./App";
import TodoList from "./todo/TodoList";
import Context from "./context";
// import AddTdo from "./todo/AddTodo";
import FilterToDo from "./todo/FilterTodo";
import "./App.css";

const AddTdo = React.lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(import("./todo/AddTodo"));
            }, 3000);
        })
);

function App() {
    const [data, setData] = useState([]);
    const [dataFiltered, setDataFiltered] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
            .then((response) => response.json())
            .then((todos) => {
                setData(todos);
            });
    }, []);

    useEffect(() => {
        setDataFiltered([...data]);
    }, [data]);

    const toggleTodo = (id) => {
        setData(
            data.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };

    const removeTodo = (id) => {
        setData(
            data.filter((todo) => {
                return todo.id !== id;
            })
        );
    };

    const addTodo = (val) => {
        const newTodo = {
            id: new Date(),
            completed: false,
            title: val,
        };
        setData([...data, newTodo]);
    };

    const filterTodo = (val) => {
        const filter = data.filter(
            (el) => el.title.toLowerCase().indexOf(val.toLowerCase()) >= 0
        );
        setDataFiltered([...filter]);
    };

    return (
        <Context.Provider value={{ removeTodo, addTodo, filterTodo }}>
            <div className='wrapper'>
                <h1>React tutorial</h1>
                <FilterToDo />
                {data.length ? (
                    <TodoList todos={dataFiltered} onToggle={toggleTodo} />
                ) : (
                    <h2 className='todo-empty'>У нас нет активный задач</h2>
                )}
                <React.Suspense fallback={<p>Loading...</p>}>
                    <AddTdo />
                </React.Suspense>
            </div>
        </Context.Provider>
    );
}

export default App;
