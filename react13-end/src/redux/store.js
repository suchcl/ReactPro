import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers"

// import counterReducer from "../redux/reducers/counter";
// import personReducer from "../redux/reducers/person";
// const allReducers = combineReducers({
//     counter: counterReducer,
//     person: personReducer
// });

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));