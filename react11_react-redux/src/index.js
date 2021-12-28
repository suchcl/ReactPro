import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App />, document.querySelector('#root'));

// 监测redux中状态的改变，若redux中状态发生了变化，那么重新渲染组件
store.subscribe(() => {
    ReactDOM.render(<App />, document.querySelector("#root"))
});