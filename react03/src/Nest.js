// 注意导入Fragment，直接解构了
import React, { Fragment } from "react";

class Header extends React.Component {
  render(props) {
    return <div>{this.props.content}</div>;
  }
}

class Content extends React.Component {
  render(props) {
    return <div>{this.props.content}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      // Fragment可以包裹多个子组件而不会向DOM添加额外的元素
      // <Fragment>也可以省略不写，只留一个尖括号<>
      //   <Fragment>
      //     <Header content="我是传递过来的header"></Header>
      //     <Content content="我是传递过来的content"></Content>
      //   </Fragment>
      <>
        <Header content="我是传递过来的header2"></Header>
        <Content content="我是传递过来的content2"></Content>
      </>
    );
  }
}

export default App;
