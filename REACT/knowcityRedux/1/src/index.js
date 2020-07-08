// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// serviceWorker.unregister();

import { createStore } from "redux";

//NOTE/: Первоначальное состояние
const initialState = {
    name: "Alex",
    secondName: "Jachson"
};
//NOTE/: Редьюсер
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

//NOTE/: Инициализация store
const store = createStore(reducer);

//NOTE: Выводим store до акшена
console.log(store.getState());

//NOTE/: ACTIONS
const changeName = {
    type: "CHANGE_NAME",
    payload: "Ivan"
};
const changeSecondName = {
    type: "CHANGE_SECOND_NAME",
    payload: "Ivanov"
};

//NOTE/: Вызов события
store.dispatch(changeName);

//NOTE: Выводим store после акшена
console.log(store.getState());

//NOTE/: Вызов события
store.dispatch(changeSecondName);

//NOTE: Выводим store после акшена
console.log(store.getState());
