import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
// 引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";
// 引入专为counter服务的reducer
import counterReducer from "./reducers/counter";
// 引入专门person服务的reducer
import personReducer from "./reducers/person";

const allReducers = combineReducers({
    counter: counterReducer,
    person: personReducer
});

// const store = createStore(counterReducer, applyMiddleware(thunk));
const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;