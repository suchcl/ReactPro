import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";


ReactDOM.render(<App />, document.querySelector("#root"));
/**
 * 虽然这样的操作会引起一定的性能问题，但是也不用过于恐慌
 * 因为react的diff算法，会监测虚拟DOM的变动情况，并不会引起大范围的重绘重排
 */
store.subscribe(() => {
    ReactDOM.render(<App />, document.querySelector("#root"));
});

