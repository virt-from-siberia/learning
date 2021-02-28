import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";

const initialState = {
    name: "Paul",
    secondName: "Petrov",
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_NAME":
            return { ...state, name: action.payload };

        case "CHANGE_SECOND_NAME":
            return { ...state, secondName: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer);

console.log(store.getState());

//action
const changeName = {
    type: "CHANGE_NAME",
    payload: "Ivan",
};

//action
const changeSecondName = {
    type: "CHANGE_SECOND_NAME",
    payload: "Ivanov",
};

//вызов события, для этого метод dispatch
store.dispatch(changeName);

console.log(store.getState());

store.dispatch(changeSecondName);

console.log(store.getState());

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
