// import React from "react";

/**
 * 这是一个类组件
 * 这个类组件的数据完全是从外部传入的
 * 当一个类组件的数据完全从外部传入的时候，就可以不使用类组件了，可以使用函数式组件，可以看下面的函数式组件案例
 */
// class Child extends React.Component {
//   render() {
//     return <div>我是{this.props.title}</div>;
//   }
// }

/**
 * 这个函数式组件和上面的类组件功能相同，只不过函数式组件中不用实现render函数，也可以使用箭头函数
 * @param {*} props
 * @returns {jsx}
 */
// function Child(props) {
//   return <div>我是{props.title}</div>;
// }

/**
 * 箭头函数实现函数式组件
 */
const Child = (props) => {
  return <div>我是{props.title}</div>;
};

export default Child;
