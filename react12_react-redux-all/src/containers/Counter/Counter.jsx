// 容器组件

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementActionAsync,
} from "../../redux/actions/couter";
import CounterStyle from "./Counter.module.css";

class Counter extends Component {
    increment = () => {
      const { value } = this.selectNumber;
      this.props.add(value * 1);
    };
  
    decrement = () => {
      const { value } = this.selectNumber;
      this.props.reduce(value * 1);
    };
  
    incrementIfOdd = () => {
      const { value } = this.selectNumber;
      const counter = this.props.counter;
      if (counter % 2 !== 0) {
        this.props.add(value * 1);
      }
    };
  
    incrementAsync = () => {
      const { value } = this.selectNumber;
      this.props.addAsync(value * 1, 1000);
    };
  
    render() {
      return (
        <div>
          <h3>当前求和值：{this.props.counter}</h3>
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
  

function mapStateToProps(state) {
  return {
    counter: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    add: (data) => {
      dispatch(createIncrementAction(data));
    },
    reduce: (data) => {
      dispatch(createDecrementAction(data));
    },
    addAsync: (data, time) => {
      dispatch(createIncrementActionAsync(data, time));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
