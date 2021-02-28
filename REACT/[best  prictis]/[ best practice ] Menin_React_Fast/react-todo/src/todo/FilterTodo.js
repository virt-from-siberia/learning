import React, { useContext, useState, useEffect } from "react";
import Context from "../context";
import "./FilterTodo.css";

const FilterTodo = () => {
    const { filterTodo } = useContext(Context);
    return (
        <div>
            <h3>Фильтр</h3>

            <input
                onChange={(evt) => {
                    filterTodo(evt.target.value);
                }}
            />
        </div>
    );
};
export default FilterTodo;
