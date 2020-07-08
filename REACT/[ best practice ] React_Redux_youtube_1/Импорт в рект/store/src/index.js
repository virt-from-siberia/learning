import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers";

import "./index.css";
import MainComponent from "./components/MainComponent";

export const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
export const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <MainComponent />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
