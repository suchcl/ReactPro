import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  state = {
    isCurrentMouse: false,
  };
  handleMouse = (flag) => {
    return () => {
      this.setState({
        isCurrentMouse: flag,
      });
    };
  };

  // 选中与取消当前任务
  handleChecked = (id) => {
    return (event) => {
      const { updateTodo } = this.props;
      updateTodo(id, event.target.checked);
    };
  };

  // 删除当前任务
  handleDelete = (id) => {
    const { deleteTask } = this.props;
    if (window.confirm("确定要删除任务吗？")) {
      deleteTask(id);
    }
  };
  render() {
    // const { todo } = this.props;
    const { id, name, done } = this.props;
    const { isCurrentMouse } = this.state;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: isCurrentMouse ? "#ddd" : "#fff" }}
      >
        <label>
          {/* 
                defaultChecked表示组件初始化时的状态，是应该选中还是不应该选中 
                不能使用checked，如果使用checked，则checkbox控件就会变成只读的了，就不能再被修改了   
                使用defaultChecked隐藏了一个bug，后续再说吧
            */}
          <input
            type="checkbox"
            // defaultChecked={done}
            checked = {done}
            onChange={this.handleChecked(id)}
          />
          <span>{name}</span>
        </label>
        {/* <button
          onClick={this.handleDelete(id)}
          className="btn btn-danger"
          style={{ display: isCurrentMouse ? "block" : "none" }}
        >
          删除
        </button> */}
        <button
          onClick={() => {
            this.handleDelete(id);
          }}
          className="btn btn-danger"
          style={{ display: isCurrentMouse ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
