import { combineReducers } from "redux";

import loadingReducer from "./loadingReducer";
import imagesReducer from "./imagesReduces";
import errorReducer from "./errorReducer";
import pageReducer from "./pageReducer";
import statsReducer from "./statsReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    stats: statsReducer
});

export default rootReducer;
