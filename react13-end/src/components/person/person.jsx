import React, { Component } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addPerson } from "../../redux/actions/person";
import PersonStyle from "./person.module.css";

class person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = { id: nanoid(), name, age };
    this.props.addPerson(personObj);
  };
  render() {
    return (
      <div>
        <h3>数值求和：{this.props.total}</h3>
        <input
          type="text"
          className={PersonStyle.ipt}
          ref={(c) => (this.nameNode = c)}
          placeholder="请输入用户名"
        />
        <input
          type="text"
          className={PersonStyle.ipt}
          ref={(c) => (this.ageNode = c)}
          placeholder="请输入年龄"
        />
        <button className={PersonStyle.btn} onClick={this.addPerson}>
          添加
        </button>
        <ul>
          {this.props.person.map((p) => {
            return (
              <li key={p.id}>
                {p.name} --- {p.age}
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
    total: state.counter,
  }),
  {
    addPerson,
  }
)(person);
