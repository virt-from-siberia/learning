// eslint-disable-next-line import/extensions
import { getAuthUserData } from "./auth-reducer";
import { InferActionsTypes } from "./redux-store";

const initialState = {
  initialized: false
};

const actions = {
  initializedSuccess: () => ({ type: "SN/APP/INITIALIZED_SUCCESS" } as const)
};

export type InitialStateType = typeof initialState;

type ActionsType = InferActionsTypes<typeof actions>;

const appReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case "SN/APP/INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true
      };
    default:
      return state;
  }
};

export const initializeApp = () => (dispatch: any) => {
  const promise = dispatch(getAuthUserData());

  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSuccess());
  });
};
export default appReducer;
