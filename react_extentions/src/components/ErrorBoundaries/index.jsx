import React, { Component } from "react";

export default class Parent extends Component {
  state = {
    hasError: false, // 用于标识子组件是否产生错误
  };
  // 当前你组件的子组件出现错误时，会触发这个钩子函数，并携带错误信息
  static getDerivedStateFromError(error) {
    console.log("@@@@", error);
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // 这里可以做些错误统计，上报给服务端或者监控平台
    console.log("组件渲染出错", error, info);
  }
  render() {
    return (
      <div>
        <h3>我是父组件</h3>
        {this.state.hasError ? <h3>当前网络不稳定，请稍后再试!</h3> : <Child />}
      </div>
    );
  }
}

class Child extends Component {
  state = {
    // users: [
    //   { id: "001", name: "Tom", age: 18 },
    //   { id: "002", name: "Jack", age: 19 },
    //   { id: "003", name: "John", age: 20 },
    // ],
    users: "hello",
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        <h3>我是子组件</h3>
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ---- {user.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
