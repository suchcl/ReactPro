import React, { useState } from "react";
import ReactDOM from "react-dom";

// class Index extends React.Component {
//   state = {
//     count: 1,
//   };
//   increment = () => {
//     this.setState((state) => ({
//       count: state.count + 1,
//     }));
//   };

//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
//   };

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({ count: state.count + 1 }));
//     }, 500);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//   render() {
//     return (
//       <div>
//         <h3>当前求和：{this.state.count}</h3>
//         <button onClick={this.increment}>点击加1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//       </div>
//     );
//   }
// }

function Index() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Nicholas Zakas");

  // useEffect()可以让函数式组件调用生命周期钩子函数
  // 可以有2个参数，第一个参数为函数，第二个参数表示要做监测的状态(state)
  // 第二个参数为一个数组，当数组为空时，表示不监控任何状态；如果不为空则数组项为具体要监控的状态
  // 回调函数相当于componentDidMount和componentDidUpdate两个钩子，但是具体和第二个参数有关系
  // React.useEffect第一个函数参数的返回值函数，相当于componentWillUnmount周期钩子函数
  React.useEffect(() => {
    console.log("@666");
    let timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    // 这个返回值函数，相当于生命周期中的componentWillUnmount钩子函数
    return () => {
      clearInterval(timer);
    };
  }, []);

  function increment() {
    setCount(count + 1);
  }

  function changeName() {
    setName("Hanmeimei");
  }

  function unmount() {
    ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
  }

  return (
    <div>
      <h3>当前求和：{count}</h3>
      <h3>姓名：{name}</h3>
      <button onClick={increment}>点击加1</button>
      <button onClick={changeName}>姓名修改</button>
      {/* 卸载组件的时候，注意将组件中使用到的定时器啥的给清理掉 */}
      <button onClick={unmount}>卸载组件</button>
    </div>
  );
}

export default Index;
