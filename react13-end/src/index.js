import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
    // 根组件使用Provider包裹，目的是为了让所有的后代的容器组件都能接收到store
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root"));