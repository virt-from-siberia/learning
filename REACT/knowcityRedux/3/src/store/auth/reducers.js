import { AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT } from "./actions";

//NOTE/: SET DEFAULT STATE
const defaultState = {
    email: "",
    password: ""
};
//NOTE/: REDUCER
export const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_EMAIL_TEXT:
            return {
                ...state,
                email: action.payload
            };
        case AUTH_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            };

        default:
            return state;
    }
};
