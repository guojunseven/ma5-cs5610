import { combineReducers } from "redux"
import count from "./countReducer";
import gridState from "./gridStateReducer";

export default combineReducers({
    count: count,
    gridState: gridState
})