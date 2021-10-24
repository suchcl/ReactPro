// import React from "react";

// class Child extends React.Component {
//   // 添加静态属性，设置组件的默认值，静态属性可以写在类的内部，也可以写类的外部，因为静态属性只有类可以调用
//   //   static defaultProps = {
//   //     title: "Nicholas Zakas，default value",
//   //   };
//   render() {
//     return <div>我是{this.props.title}</div>;
//   }
// }

// // 写在类外部的静态属性，也可以实现组件默认值的设置
// Child.defaultProps = {
//   title: "我是子组件最新的默认值",
// };

function Child(props) {
  return <div>我是函数式组件，值为{props.title}</div>;
}

Child.defaultProps = {
  title: "我是函数式组件的默认值",
};

export default Child;
