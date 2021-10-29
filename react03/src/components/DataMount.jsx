import React from "react";
// 父子组件
// import Child from "./Child";
// 组件设置默认props
import ChildDefaultProps from "./ChildDefaultProps";

class DataMount extends React.Component {
  render() {
    return (
      <>
        <div>父组件</div>
        
        <ChildDefaultProps></ChildDefaultProps>
      </>
    );
  }
}

export default DataMount;
