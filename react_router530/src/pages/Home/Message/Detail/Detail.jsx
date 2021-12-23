import React, { Component } from "react";
import qs from "querystring";

const obj = {
  name: "Nicholas Zakas",
  age: 18,
};
// stringify方法将对象数据转换成urlencoded编码字符串
// console.log(qs.stringify(obj)); // name=Nicholas%20Zakas&age=18

const car = "car='奥拓'&price=9.9";
// parse方法将urlencoded字符串转换成对象
// console.log(qs.parse(car)); // {car: "'奥拓'", price: '9.9'}

const DetailData = [
  {
    id: "001",
    title: "消息001",
    content: "内容001",
  },
  {
    id: "002",
    title: "消息002",
    content: "内容002",
  },
  {
    id: "003",
    title: "消息003",
    content: "内容003",
  },
];

export default class Detail extends Component {
  render() {
    console.log(this.props);
    // 通过props方式接收params参数
    // 组件之间传值，基本上就是依赖props
    // const { id, title } = this.props.match.params;

    // 接收search参数
    const result = this.props.location.search;
    const { id, title } = qs.parse(result.slice(1));

    // demo中是几条模拟的数据，实际开发中应该是从服务端下发的动态数据
    const detail = DetailData.find((detailObj) => {
        return detailObj.id === id;
    });
    return (
      <div>
        <ul>
          <li>Id: {id}</li>
          <li>title: {title}</li>
          <li>content：{detail.content}</li>
        </ul>
      </div>
    );
  }
}
