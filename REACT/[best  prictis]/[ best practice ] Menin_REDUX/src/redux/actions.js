import {
    INCREMENT,
    DECREMENT,
    CHANGE_THEME,
    DISABLE_BUTTONS,
    ENABLE_BUTTONS,
} from "./types";

export function increment() {
    return {
        type: INCREMENT,
    };
}
export function decrement() {
    return {
        type: DECREMENT,
    };
}
export function changeTheme(newTheme) {
    return {
        type: CHANGE_THEME,
        payload: newTheme,
    };
}

export function enableButtons() {
    return {
        type: ENABLE_BUTTONS,
    };
}

export function disableButtons() {
    return {
        type: DISABLE_BUTTONS,
    };
}

export function asyncIncrement() {
    return function (dispatch) {
        dispatch(disableButtons());
        setTimeout(() => {
            dispatch({ type: INCREMENT });
            dispatch(enableButtons());
        }, 3000);
    };
}
