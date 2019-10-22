import { combineReducers } from "redux";
import counterActions from "./counterActions";

const rootReducer = combineReducers({
   counterActions
});

export default rootReducer;