import React, { Component, PureComponent } from "react";
import "./index.css";

export default class Prent extends PureComponent {
  state = {
    carName: "奔驰S600",
    students: ["钱", "孙", "赵"],
  };

  addStudent = () => {
    const { students } = this.state;
    const newStu = "刘";
    // 下面的方式，是产生了新数据
    this.setState({
      students: [newStu, ...students],
    });
  };
  //   changeCar = () => {
  //     this.setState({
  //       carName: "奥拓",
  //     });
  //   };

  changeCar = () => {
    // 在组件使用PureComponent的时候，会进行一次浅比较，如果现在和之前的对象是同一个对象，那么就不会重新渲染
    // 下面的方式是修改了state数据
    // const obj = this.state;
    // obj.carName = "奥拓";
    // console.log(obj === this.state);
    // this.setState(obj); // 虽然setState了，但是不会重新渲染，因为obj和this.state是同一个对象，所以不会重新渲染
    // 下面的方式会进行重新渲染
    this.setState({
      carName: "奥拓",
    });
  };

  // shouldComponentUpdate可以接收2个参数：nextProps、nextState
  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log(this.props, this.state);
  //     console.log(nextState, nextProps);
  //     if (this.state.carName === nextState.carName) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  render() {
    console.log("父组件更新了");
    const { carName } = this.state;
    return (
      <div className="parent">
        <h3>我是Parent组件</h3>
        <h4>汽车：{carName}</h4>
        <button onClick={this.changeCar}>换车</button>
        <div>学生列表：{this.state.students}</div>
        <button onClick={this.addStudent}>添加学生</button>
        <Child carName={carName} />
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    console.log("子组件更新了");
    return (
      <div className="child">
        <h3>我是Child组件</h3>
        <h4>我从父组件接收到的车是:{this.props.carName}</h4>
      </div>
    );
  }
}
