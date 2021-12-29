import React, { Component } from "react";
import { nanoid } from "nanoid";
import { connect } from "react-redux";
import { createAddPersonAction } from "../../redux/actions/person";
import PersonStyle from "./Person.module.css";

class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
  };
  render() {
    return (
      <div>
        <h3>求和总数：{this.props.countSum}</h3>
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
          {this.props.person.map((p) => {
            return (
              <li key={p.id}>
                {p.name} - {p.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    person: state.person,
    countSum: state.counter,
  }), //映射状态
  {
    addPerson: createAddPersonAction, // 映射操作状态的方法
  }
)(Person);
