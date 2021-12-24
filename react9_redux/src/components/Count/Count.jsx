import React, { Component } from "react";
import CountStyle from "./Count.module.css";

export default class Count extends Component {
  state = {
    count: 0,
  };

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    this.setState({
      count: count + parseInt(value),
    });
  };

  // 减法
  decrement = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    this.setState({
      count: count - value * 1,
    });
  };

  // 当前求和为奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    if (count % 2 !== 0) {
      this.setState({
        count: count + value * 1,
      });
    }
  };

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    const { count } = this.state;
    setTimeout(() => {
      this.setState({
        count: count + value * 1,
      });
    }, 1000);
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>当前求和为：{count}</h3>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment} className={CountStyle.btn}>
          +
        </button>
        <button onClick={this.decrement} className={CountStyle.btn}>
          -
        </button>
        <button onClick={this.incrementIfOdd} className={CountStyle.btn}>
          当前求和为奇数再加
        </button>
        <button onClick={this.incrementAsync} className={CountStyle.btn}>
          异步加
        </button>
      </div>
    );
  }
}
