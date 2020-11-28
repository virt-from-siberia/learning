import React, { useContext, useState } from "react";
import Context from "../context";
import "./AddTodo.css";

const useInputValue = (defaultValue = "") => {
    const [value, setValue] = useState(defaultValue);
    return {
        bind: {
            value,
            onChange: (evt) => setValue(evt.target.value),
        },
        clear: () => setValue(""),
        value: () => value,
    };
};

const AddTodo = () => {
    const { addTodo } = useContext(Context);
    const input = useInputValue("");

    const addNewTodo = (evt) => {
        addTodo(input.value());
        input.clear();
    };

    return (
        <div>
            <h3 className='add-header'>Добавить новую задачу</h3>
            <div className='add-block'>
                <input {...input.bind} />
                <button onClick={(evt) => addNewTodo(evt)}>Добавить</button>
            </div>
        </div>
    );
};

export default AddTodo;
