import { FormAction, stopSubmit } from "redux-form";
import { Action } from "redux";
import { ResultCodeForCapcthaEnum, ResultCodesEnum } from "../api/api";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/securety-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";

// const SET_USER_DATA = "SN/auth/SET_USER_DATA";
// const GET_CAPTCHA_URL_SUCCESS = "SN/auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null // if null, then captcha is not required
};

const authReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/auth/SET_USER_DATA":
    case "SN/auth/GET_CAPTCHA_URL_SUCCESS":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

const actions = {
  setAuthUserData: (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
  ) =>
    ({
      type: "SN/auth/SET_USER_DATA",
      payload: { userId, email, login, isAuth }
    } as const),

  getCaptchaUrlSuccess: (captchaUrl: string) =>
    ({
      type: "SN/auth/GET_CAPTCHA_URL_SUCCESS",
      payload: { captchaUrl }
    } as const)
};

export const getAuthUserData = (): ThunkType => async dispatch => {
  const meData = await authAPI.me();

  if (meData.resultCode === ResultCodesEnum.Success) {
    const { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
): ThunkType => async dispatch => {
  const data = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodesEnum.Success) {
    // success, get auth data
    dispatch(getAuthUserData());
  } else {
    if (data.resultCode === ResultCodeForCapcthaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    const message = data.messages.length > 0 ? data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = (): ThunkType => async (dispatch: any) => {
  const response = await authAPI.logout();

  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | FormAction>;

export default authReducer;
