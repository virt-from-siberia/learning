import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import tracks from "./tracks";
import playList from "./playList";
import filterTracks from "./filterTracks";

export default combineReducers({
    routing: routerReducer,
    tracks: tracks,
    playList: playList,
    filterTracks: filterTracks
});
