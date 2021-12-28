import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

// 监测redux中状态的改变，若redux中状态发生了变化，那么重新渲染组件
// 使用了react-redux后，下面的对状态的监控就可以省略，该部分的功能在react-redux的connect函数中做了实现
// store.subscribe(() => {
//     ReactDOM.render(<App />, document.querySelector("#root"))
// });