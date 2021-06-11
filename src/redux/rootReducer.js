import { combineReducers } from "redux";
import hobbyReducer from "./Todo/HobbyReducer";

const rootReducer = combineReducers({ hobby: hobbyReducer });
export default rootReducer;
