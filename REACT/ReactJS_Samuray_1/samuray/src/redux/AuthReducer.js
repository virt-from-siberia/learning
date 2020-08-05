import { AXIOS_API } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA ";

let initialState = {
  isFetching: false,
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: {
    userId,
    email,
    login,
  },
});

export const getAuthUserData = (dispatch) => () => {
  AXIOS_API.auth()
    .then((data) => {
      let { login, id, email } = data.data;
      dispatch(setAuthUserData(id, email, login));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default authReducer;
