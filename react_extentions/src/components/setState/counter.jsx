import React, { Component } from "react";

export default class counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    // 对象式的setState
    const { count } = this.state;
    // 回调函数是可选的，回调函数会在状态更新以及界面更新后执行，可以获取到更新后的状态
    // this.setState(
    //   {
    //     count: count + 1,
    //   },
    //   () => {
    //     console.log(this.state.count);
    //   }
    // );
    // // react中状态的更新是异步的，所以这里同步方式获取修改后的状态是获取不到的
    // console.log("21行的输出：", this.state.count); // 0

    /**
     * 函数式setState
     * 函数式state可以接收到state和props
     * 函数式setState，也可以有可选的回调
     */
    this.setState(
      (state, props) => {
        return {
          count: count + 2,
        };
      },
      () => {
        console.log(this.state.count);
      }
    );
  };
  render() {
    return (
      <div>
        <h3>当前求和为：{this.state.count}</h3>
        <button onClick={this.increment}>点击加1</button>
      </div>
    );
  }
}
