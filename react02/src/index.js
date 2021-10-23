import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   /**
//    * 这种方式可以让render函数将组件渲染到指定的元素上
//    * 但是假如我想给组件传递参数的时候怎么办呢？现在的jsx是做不到的
//    * 可以把jsx抽离出去，抽离成一个函数，然后函数返回jsx，然后render函数中通过执行抽离出去的函数，这个函数就叫做组件函数
//    * 看下面的代码案例
//    */
//   <div>Hello, React</div>, // jsx
//   document.getElementById("root")
// );

// 这是函数式组件的实现
// const App = (props) => {
//   let title = props.title;
//   let name = props.name;
//   return (
//     <div>
//       Hello,{name}
//       {title}
//     </div>
//   );
// };

// // ReactDOM.render(app("!!!"), document.getElementById("root")); // 组件app()方式，还可以通过<app></app>方式编码

// ReactDOM.render(
//   <App title="." name="Nicholas" />,
//   document.getElementById("root")
// );

// 下面是类组件的实现
/**
 * props默认可以绑定到class上，然后通过this.props获取到当前class上关联的props
 */
class App extends React.Component {
  render() {
    return <div>Hello,Cookie{this.props.title}</div>;
  }
}

ReactDOM.render(<App title="..." />, document.getElementById("root"));
