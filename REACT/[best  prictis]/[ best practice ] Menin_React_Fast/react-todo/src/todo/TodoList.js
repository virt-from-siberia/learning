import React from "react";
import "./TodoList.css";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    //FIXME: CONSOLE LOG ===========>
    console.log(props);
    return (
        <ul>
            {props.todos.map((todo, index) => {
                return (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                    />
                );
            })}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default TodoList;
