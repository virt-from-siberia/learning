import React from "react";
import AuthContainer from "./components/Auth/AuthContainer";
import RegistrationContainer from "./components/Registration/RegistrationContainer";
import Debug from "./components/Debag/DebugContainer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./store/rootReducer";

import "./App.css";

const store = createStore(rootReducer, applyMiddleware(logger));

const App = () => {
    return (
        <Provider store={store}>
            <div className='wrapper'>
                <h1>Complex State</h1>

                <div className='forms'>
                    <AuthContainer />
                    <RegistrationContainer />
                </div>
                <Debug />
            </div>
        </Provider>
    );
};

export default App;
