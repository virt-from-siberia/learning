import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import "./App.css";

import { Connected } from "./Connected";
import { reducer } from "./reducers";
//Импортируем функцию вотчер саги
import { watchLoadData } from "./sagas";
//Импортируем функцию вотчер саги

function App() {
    const sagaMidlleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(logger, sagaMidlleware));

    //Импортируем функцию вотчер саги
    sagaMidlleware.run(watchLoadData);

    return (
        <Provider store={store}>
            <Connected />
        </Provider>
    );
}

export default App;
