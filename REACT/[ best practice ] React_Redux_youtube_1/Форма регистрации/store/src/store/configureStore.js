import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    compose(
        //NOTE/: logger выводит в консоль экшены, prev и next state,
        applyMiddleware(thunk, logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
