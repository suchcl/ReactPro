import React, { Fragment } from "react";
import OuterCss from "./OuterCss";
import DivContainer from "./StyledComponents"; // 导入styled-components组件

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
        <DivContainer>styled-components</DivContainer>
      </Fragment>
    );
  }
}

export default ClassStyle;
