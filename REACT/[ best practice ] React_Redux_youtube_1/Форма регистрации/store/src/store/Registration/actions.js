import {
    REGISTRATION_CHANGE_EMAIL_TEXT,
    REGISTRATION_CHANGE_PASSWORD_TEXT,
    REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
} from "../consts";

//Экшен криетер функция которая вернет нам обьект с эешенами
export const setEmail = (email) => ({
    type: REGISTRATION_CHANGE_EMAIL_TEXT,
    payload: email,
});

//Экшен криетер функция которая вернет нам обьект с эешенами
export const setPassword = (password) => ({
    type: REGISTRATION_CHANGE_PASSWORD_TEXT,
    payload: password,
});

//Экшен криетер функция которая вернет нам обьект с эешенами
export const setRepeatPassword = (repeatPassword) => ({
    type: REGISTRATION_CHANGE_REPEAT_PASSWORD_TEXT,
    payload: repeatPassword,
});
