//Core
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

//Reducer
import { rootReducer } from "./rootReducer";

const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title: () => "#129bfe",
        prevState: () => "#1c5faf",
        action: () => "#149945",
        nextState: () => "#f042d3",
        error: () => "#ff0005",
    },
});

export const store = createStore(rootReducer, applyMiddleware(logger));
