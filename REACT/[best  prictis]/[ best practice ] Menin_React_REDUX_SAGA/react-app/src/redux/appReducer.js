import {
    LOADER_HIDE_LOADER,
    LOADER_SHOW_LOADER,
    POST_SHOW_ALERT,
    POST_HIDE_ALERT,
} from "./types";

const initialState = {
    loading: false,
    alert: false,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADER_SHOW_LOADER:
            return {
                ...state,
                loading: true,
            };
        case LOADER_HIDE_LOADER:
            return {
                ...state,
                loading: false,
            };
        case POST_SHOW_ALERT:
            return {
                ...state,
                alert: true,
            };
        case POST_HIDE_ALERT:
            return {
                ...state,
                alert: false,
            };

        default:
            return state;
    }
};
