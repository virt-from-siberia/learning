import { combineReducers } from "redux";
import { authReducer } from "./Auth/reducers";
import { registrationReducer } from "./Registration/reducers";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
});
