import React, { Component } from "react";
import FooterStyle from "./Footer.module.css";

export default class Footer extends Component {
  data = {
    username: "Nicholas Zakas",
    age: 18,
    job: "Programmer",
  };

  add = () => {
    console.log("来了来了");
  };

  render() {
    return (
      <>
        <p>自定义组件: Footer</p>
        <p className={FooterStyle.txt}>自定义新增</p>
        <button onClick={this.add}>求和计算</button>
        <div className="user">
          <h3>姓名: {this.data.username}</h3>
          <p>年龄: {this.data.age}</p>
          <p>工作: {this.data.job}</p>
        </div>
      </>
    );
  }
}
