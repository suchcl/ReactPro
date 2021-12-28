import React, { Component } from "react";
import PersonStyle from "./Person.module.css";

export default class Person extends Component {
  render() {
    return (
      <div>
        <input
          className={PersonStyle.ipt}
          ref={(c) => (this.nameNode = c)}
          type="text"
          placeholder="请输入用户名"
        />
        <input
          className={PersonStyle.ipt}
          ref={(c) => (this.ageNode = c)}
          type="text"
          placeholder="请输入年龄"
        />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          <li>姓名1 ---- 年龄1</li>
          <li>姓名2 ---- 年龄2</li>
          <li>姓名3 ---- 年龄3</li>
        </ul>
      </div>
    );
  }
}
