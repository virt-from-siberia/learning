import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import "./App.css";

import { Connected } from "./Connected";
import { reducer } from "./reducers";

function App() {
    // const sagaMidlleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(logger, thunk));

    return (
        <Provider store={store}>
            <Connected />
        </Provider>
    );
}

export default App;
