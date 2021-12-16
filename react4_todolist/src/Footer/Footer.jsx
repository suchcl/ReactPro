import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  // 全选、反选的回调函数
  checkAllTodo = (event) => {
    const { checkAllTodo } = this.props;
    checkAllTodo(event.target.checked);
  };

  // 清除已完成的任务
  handleClearAllDone = () => {
    const { clearAllDone } = this.props;
    clearAllDone();
  };
  render() {
    const { todos } = this.props;
    // 已完成数
    const doneCount = todos.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0);
    }, 0);
    // 总数
    const total = todos.length;

    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            // checkbox控件的初始状态，可以使用checked，也可以使用defaultChecked，但是使用checked的时候需要配合onChange一起使用
            checked={doneCount === total && total !== 0 ? true : false}
            onChange={this.checkAllTodo}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
