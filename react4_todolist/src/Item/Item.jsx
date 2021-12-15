import React, { Component } from "react";
import "./Item.css";

export default class Item extends Component {
  render() {
    // const { todo } = this.props;
    const { id, name, done } = this.props;
    return (
      <li>
        <label>
          {/* 
                defaultChecked表示组件初始化时的状态，是应该选中还是不应该选中 
                不能使用checked，如果使用checked，则checkbox控件就会变成只读的了，就不能再被修改了   
                使用defaultChecked隐藏了一个bug，后续再说吧
            */}
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }
}
