import { IMAGES } from '../constants';

const initialState = [];

const imagesReducer = (state = initialState, action) => {
    if (action.type === IMAGES.LOAD_SUCCESS) {
        return [...state, ...action.images];
    }
    return state;
};

export default imagesReducer;
