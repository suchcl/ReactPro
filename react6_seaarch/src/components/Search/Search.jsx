import React, { Component, createRef } from "react";
import axios from "axios";

export default class Search extends Component {
  // createRef()函数的方式定义ref
  // inputKeyWord = React.createRef();

  // 搜索
  search = () => {
    // 获取输入框的值
    //console.log(inputKeyWord.current.value); // createRef函数方式定义的，暂时先不用
    const { value: keyword } = this.keyWordElement;

    // 发送网络请求，请求搜索的结果数据
    // 可以向github查询用户信息,api请求地址为：https://api.github.com/search/users?q=xxx   get请求
    axios.get(`/api/search/users?q=${keyword}`).then(
      (response) => {
        console.log("请求成功了", response);
      },
      (err) => {
        console.log("失败了",err);
      }
    );
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">查找用户</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            // ref={this.inputKeyWord}
            type="text"
            placeholder="请输入你要查找的用户名"
          />
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
