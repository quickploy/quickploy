import { combineReducers } from "redux";
import userReducer from "./reducers/userReducers";

const Reducers = combineReducers({
     user: userReducer
});

export default Reducers;
