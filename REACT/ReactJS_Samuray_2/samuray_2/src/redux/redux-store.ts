import {
  Action,
  applyMiddleware,
  combineReducers,
  compose,
  createStore
} from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { reducer as formReducer } from "redux-form";
// eslint-disable-next-line import/extensions
import profileReducer from "./profile-reducer";
// eslint-disable-next-line import/extensions
import dialogsReducer from "./dialogs-reducer";
// eslint-disable-next-line import/extensions
import sidebarReducer from "./sidebar-reducer";
// eslint-disable-next-line import/extensions
import usersReducer from "./users-reducer";
// eslint-disable-next-line import/extensions
import authReducer from "./auth-reducer";
// eslint-disable-next-line import/extensions
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends {
  [key: string]: (...args: any[]) => infer U;
}
  ? U
  : never;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
>;

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line no-underscore-dangle
window.__store__ = store;

export default store;
