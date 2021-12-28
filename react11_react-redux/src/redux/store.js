import { createStore, applyMiddleware } from "redux";
// redux-thunk，用于支持异步action
import thunk from "redux-thunk";
import counterReducer from "./couter_reducer";

const store = createStore(counterReducer, applyMiddleware(thunk));
export default store;