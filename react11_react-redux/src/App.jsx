import React, { Component } from "react";
// import Counter from './components/Counter/Counter';
import CounterContainer from "./container/Counter/Counter";
// import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        {/* 向UI组件传递store，也可以通过Provider，在根组件，这里就不需要传了 */}
        {/* <CounterContainer store={store} /> */}
        <CounterContainer />
      </div>
    );
  }
}
