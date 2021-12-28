import React, { Component } from "react";
import {
  createDecrementAction,
  createIncrementAction,
  createIncrementActionAsync,
} from "../../redux/counter_action";
import store from "../../redux/store";
import CounterStyle from "./Counter.module.css";

export default class index extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value * 1));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value * 1));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1));
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementActionAsync(value * 1, 1000));
  };
  render() {
    return (
      <div>
        <h3>当前求和为：{store.getState()}</h3>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button className={CounterStyle.btn} onClick={this.increment}>
          +
        </button>
        <button className={CounterStyle.btn} onClick={this.decrement}>
          -
        </button>
        <button className={CounterStyle.btn} onClick={this.incrementIfOdd}>
          奇数加
        </button>
        <button className={CounterStyle.btn} onClick={this.incrementAsync}>
          异步加
        </button>
      </div>
    );
  }
}
