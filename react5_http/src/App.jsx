import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getStudentData = () => {
    /**
     * 虽然服务器的地址是http://localhost:5000，但这里不能写http://localhost:5000，因为发送ajax请求存在跨域问题
     * 我们在客户端配置了一个代理服务器，所以现在开发环境，本质上是在向本地的代理服务器发送请求，然后代理服务器给客户端提供数据
     * 只是代理服务器做了一些中间工作，它向服务器请求了数据，然后返回给了客户端使用
     */
    axios.get("http://localhost:3000/student").then(
      (res) => {
        console.log("学生数据请求成功了：", res.data);
      },
      (err) => {
        console.log("请求失败了", err);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>请求学生数据</button>
      </div>
    );
  }
}
