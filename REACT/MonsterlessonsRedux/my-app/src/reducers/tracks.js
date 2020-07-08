const initialState = [];

export default function playlist(state = initialState, action) {
    if (action.payload === "") {
        return state;
    }
    if (action.type === "ADD_TRACK") {
        return [...state, action.payload];
    } else if (action.type === "FETCH_TRACK_SUCCESS") {
        return action.payload;
    }
    return state;
}
