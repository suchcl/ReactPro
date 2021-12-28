import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(<App />,document.querySelector("#root"));

// redux只负责状态的管理，但是不负责UI的数据同步，UI的数据同步需要开发者自己处理实现
store.subscribe(() => {
    ReactDOM.render(<App />,document.querySelector("#root"));
});