import { IMAGES } from '../constants';

const initialState = null;

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error;
        case IMAGES.LOAD:
        case IMAGES.LOAD_SUCCESS:
            return null;

        default:
            return state;
    }
};

export default errorReducer;
