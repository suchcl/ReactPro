import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  render() {
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        {/* 使用render props，render函数传入，render函数也可以自定义，只要和接收的地方一致即可 */}
        <A render={(name) => <B name={name} />} />
      </div>
    );
  }
}

class A extends Component {
  state = {
    name: "Nicholas Zakas",
  };
  render() {
    const { name } = this.state;
    return (
      <div className="child">
        <h3>我是A组件</h3>
        {/* 接收从另一个组件传递过来的组件 */}
        {this.props.render(name)}
      </div>
    );
  }
}

class B extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="grandson">
        <h3>我是B组件,姓名：{this.props.name}</h3>
      </div>
    );
  }
}
