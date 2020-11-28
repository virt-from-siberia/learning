import React, { Component, useState, useEffect } from "react";
import TodoList from "./TodoList";
import { Context } from "./context";

export default function App() {
    const [todos, setTodos] = useState([]);

    const [todoTitle, setTodoTitle] = useState("");

    useEffect(() => {
        const raw = localStorage.getItem("Todos");
        setTodos(JSON.parse(raw));
    }, []);

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (evt) => {
        if (evt.key === "Enter") {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false,
                },
            ]);
            setTodoTitle(" ");
        }
    };

    const removeTodo = (id) => {
        //FIXME: CONSOLE LOG ===========>
        console.log(id);
        setTodos(
            todos.filter((todo) => {
                return todo.id !== todo;
            })
        );
    };

    const toggleTodo = (id) => {
        console.log(id);
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
            })
        );
    };

    return (
        <Context.Provider value={{ removeTodo, toggleTodo }}>
            <div className='container'>
                <h1>Todo app</h1>

                <div className='input-field'>
                    <input
                        type='text'
                        valaue={todoTitle}
                        onChange={(evt) => {
                            setTodoTitle(evt.target.value);
                        }}
                        onKeyPress={(evt) => addTodo(evt)}
                    />
                    <label>Todo name</label>
                </div>

                <TodoList todos={todos} />
            </div>
        </Context.Provider>
    );
}
