import React from "react";
// 导入外部样式
import "./assets/css/main.css";

class OuterCss extends React.Component {
  render() {
    return (
      <>
        {/**通过class设置样式，注意这是在jsx，属于React元素，react元素遵循cacel-case的命名方式，即小驼峰命名 */}
        <div className="userinfo">
          <p>姓名：Nicholas Zakas</p>
          <p>年龄：26</p>
        </div>
      </>
    );
  }
}

export default OuterCss;
