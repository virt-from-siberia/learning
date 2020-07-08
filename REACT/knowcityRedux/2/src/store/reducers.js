const initialState = {
    firstName: "",
    secondName: ""
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_CHANGE_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case ACTION_CHANGE_SECOND_NAME:
            return { ...state, secondName: action.payload };
        default:
            return state;
    }
};
