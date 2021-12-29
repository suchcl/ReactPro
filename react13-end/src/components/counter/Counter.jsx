import React, { Component } from "react";
import { connect } from "react-redux";
import CounterStyle from "./counter.module.css";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/counter";

class Counter extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(value * 1);
  };

  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(value * 1);
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const counter = this.props.counter;
    if (counter % 2 !== 0) {
      this.props.increment(value * 1);
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(value * 1, 1000);
  };
  render() {
    return (
      <div className={CounterStyle.counter}>
        <h3>当前求和为：{this.props.counter}</h3>
        <h3>当前人数为：{this.props.personNum}</h3>
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
          奇数时加
        </button>
        <button className={CounterStyle.btn} onClick={this.incrementAsync}>
          异步加
        </button>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    counter: state.counter,
    personNum: state.person.length,
  }),
  {
    increment,
    decrement,
    incrementAsync,
  }
)(Counter);
