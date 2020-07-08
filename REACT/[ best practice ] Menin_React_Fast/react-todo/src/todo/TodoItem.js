import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";
import "./TodoItem.css";

const TodoItem = ({ todo, index, onChange }) => {
    const { removeTodo } = useContext(Context);
    const classes = [];
    if (todo.completed) {
        classes.push("done");
    }
    return (
        <li>
            <span className={classes.join(" ")}>
                <input
                    type='checkbox'
                    checked={todo.completed}
                    onChange={() => {
                        onChange(todo.id);
                    }}
                />

                <strong>{index + 1}</strong>
                {todo.title}
            </span>
            <button className='re' onClick={() => removeTodo(todo.id)}>
                &times;
            </button>
        </li>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default TodoItem;
