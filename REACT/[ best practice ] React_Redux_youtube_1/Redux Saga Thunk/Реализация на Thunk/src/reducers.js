import { PUT_DATA } from "./actions";

const initialState = {
    data: {},
};

export const reducer = (state = initialState, action) => {
    if (action.type === PUT_DATA) {
        return {
            ...state,
            data: action.payload,
        };
    }

    return state;
};
