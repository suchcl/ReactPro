import React, { Component } from "react";
// 导入store，用于获取redux中保存的状态
import store from "../../redux/store";
import CountStyle from "./Count.module.css";
// 引入action，专门用于创建action对象
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/count_action";

export default class Count extends Component {
  // 状态交给redux管理了，所以组件内就不需要再维护一个state了
  // state = {
  //   count: 0,
  // };

  // 组件多了，每个组件中的状态更新都需要在钩子函数中做一些处理
  // 可以把这部分的处理，直接放到入口文件index.js中
  // componentDidMount() {
  //   // 监测redux中状态的变化，只要redux中状态变化了，就调用render，重新渲染组件
  //   store.subscribe(() => {
  //     this.setState({});
  //   });
  // }

  // 加法
  increment = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    // this.setState({
    //   count: count + parseInt(value),
    // });
    // 代码内自己实现了action
    // store.dispatch({ type: "increment", data: value * 1 });
    // 下面的实现，可以直接调用action
    store.dispatch(createIncrementAction(value * 1));
  };

  // 减法
  decrement = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    // this.setState({
    //   count: count - value * 1,
    // });
    // store.dispatch({ type: "decrement", data: value * 1 });
    // 调用action
    store.dispatch(createDecrementAction(value * 1));
  };

  // 当前求和为奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    const count = store.getState();
    if (count % 2 !== 0) {
      // this.setState({
      //   count: count + value * 1,
      // });
      // store.dispatch({ type: "increment", data: value * 1 }); // 代码自己实现了action
      // 调用action
      store.dispatch(createIncrementAction(value * 1));
    }
  };

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectNumber;
    // const { count } = this.state;
    const count = store.getState();
    setTimeout(() => {
      // this.setState({
      //   count: count + value * 1,
      // });
      // store.dispatch({ type: "increment", data: value * 1 });
      // 调用action
      store.dispatch(createIncrementAction(value * 1));
    }, 1000);
  };
  render() {
    // const { count } = this.state;
    return (
      <div>
        <h3>当前求和为：{store.getState()}</h3>
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
