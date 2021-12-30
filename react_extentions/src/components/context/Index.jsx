import React, { Component } from "react";
import "./context.css";

// 创建Context对象
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;
export default class Index extends Component {
  state = {
    username: "Nicholas Zakas",
    age: 18,
  };
  render() {
    const { username, age } = this.state;
    return (
      <div className="index">
        <h3>我是前辈组件，姓名是:{username}</h3>
        {/* value,就可以让后代组件都具有了value的数据 */}
        <Provider value={{ username, age }}>
          <A />
        </Provider>
      </div>
    );
  }
}

class A extends Component {
  render() {
    return (
      <div className="child">
        <h3>我是儿子组件,从父组件中获取到的用户名是：{this.props.username}</h3>
        <B username={this.props.username} />
      </div>
    );
  }
}

class B extends Component {
  // 声明接收context，一定是静态类型
  static contextType = MyContext;
  render() {
    const { username, age } = this.context;
    console.log(username);
    console.log(age);
    return (
      <div className="grandson">
        <h3>
          我是孙子组件,从父组件B中获取到的用户名是：{username}，年龄：{age}
        </h3>
        <C />
      </div>
    );
  }
}

function C() {
  return (
    <div className="offspring">
      <h3>我是后代的函数式组件</h3>
      <h4>
        我从前代组件中获取到了
        <Consumer>{(value) => `姓名：${value.username},年龄：${value.age}`}</Consumer>
        {/* <Consumer>
          {(value) => {
            return (
              <>
                用户名{value.username}，年龄{value.age}
              </>
            );
          }}
        </Consumer> */}
      </h4>
    </div>
  );
}
