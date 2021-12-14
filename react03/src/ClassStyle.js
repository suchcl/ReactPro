import React, { Fragment } from "react";
import OuterCss from "./OuterCss";
import DivContainer from "./StyledComponents"; // 导入styled-components组件
import styled2 from "styled-components";

const Button = styled2.a`
{
  display: block;
  text-align: center;
  width: 120px;
  height: 32px;
  line-height: 32px;
  background-color: #f20;
  color: #fff;
  cursor: pointer;

  &:hover{
    background-color: rgba(255,34,0,0.6)
  }
}
`;

const Name = styled2.h2`
{
  font-weight: normal;
  font-size: 18px;
  color: #369;
}`;

const userListStyle = {
  fontSize: "32px",
  color: "#090",
  textAlign: "center",
  listStyle: "none",
};



class ClassStyle extends React.Component {
  render() {
    return (
      <Fragment>
        <div style={{ fontSize: "50px", color: "#f20" }}>测试下行内样式</div>
        <ul style={userListStyle}>
          <li>Nicholas Zakas</li>
          <li>Hanmeimmei</li>
        </ul>
        <OuterCss></OuterCss>
        <Button>提交</Button>
        <DivContainer>
          <Name className="name">姓名：Nicholas Zakas</Name>
          <p>年龄：18</p>
          <p>工作：工程师</p>
        </DivContainer>
      </Fragment>
    );
  }
}

export default ClassStyle;
