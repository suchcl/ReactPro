import React, { Component } from "react";
import CounterStyle from "./Counter.module.css";

export default class Counter extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    let data = value * 1;
    this.props.add(data);
  };
  render() {
    return (
      <div>
        <h3>当前求和为：{this.props.counter}</h3>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment} className={CounterStyle.btn}>
          +
        </button>
        <button onClick={this.decrement} className={CounterStyle.btn}>
          -
        </button>
        <button onClick={this.incrementIfOdd} className={CounterStyle.btn}>
          奇数加
        </button>
        <button onClick={this.incrementAsync} className={CounterStyle.btn}>
          异步加
        </button>
      </div>
    );
  }
}
