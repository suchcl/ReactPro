import { combineReducers } from "redux";

import counter from "./counter";
import person from "./person";

export default combineReducers({
    counter,
    person
});