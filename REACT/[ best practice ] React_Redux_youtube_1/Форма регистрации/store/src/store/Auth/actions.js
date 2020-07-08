import { AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT } from "../consts";

export const setEmail = (email) => ({
    type: AUTH_CHANGE_EMAIL_TEXT,
    payload: email,
});

export const setPassword = (password) => ({
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: password,
});
