// Core
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

// Instruments
import { store } from "./init/store";
import "./theme/init";

// Intro
import Main from "./routes/Main";

render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>,
    document.getElementById("app")
);
