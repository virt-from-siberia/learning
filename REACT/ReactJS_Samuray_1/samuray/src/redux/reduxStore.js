import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./userReducer";
import authReducer from "./AuthReducer";
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunk));

window.store = store;

export default store;
