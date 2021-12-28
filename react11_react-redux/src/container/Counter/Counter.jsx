// 引入Counter的UI组件
import CounterUI from "../../components/Counter/Counter";

// 引入connect用于连接UI组件和redux
import { connect } from "react-redux";
import { INCREMENT } from "../../redux/constant";

import {
  createDecrementAction,
  createIncrementAction,
  createIncrementActionAsync,
} from "../../redux/counter_action";

// mapStateToProps函数返回一个对象
// 返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件props的value
// mapStateToProps函数的作用就是用于传递状态
function mapStateToProps(state) {
  return {
    counter: state,
  };
}

// mapDispatchToProps函数返回一个对象
// 返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件props的value
// mapDispatchToProps函数的作用就是用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    add: (data) => {
      // 通知redux执行加法操作
      // dispatch({type:INCREMENT,data}); // 直接实现一个action
      dispatch(createIncrementAction(data)); // 调用action
    },
    reduce: (data) => {
      dispatch(createDecrementAction(data));
    },
    addAsync: (data, time) => {
      dispatch(createIncrementActionAsync(data, time));
    },
  };
}
// 使用connect()()创建并暴露一个容器组件
// export default connect(mapStateToProps, mapDispatchToProps)(CounterUI); // 也可以直接把函数参数拿到调用中来

export default connect(
  // mapStateToProps
  (state) => ({ counter: state }),
  // mapDispatyToProps
  // 下面为一般的实现，即函数实现方式
  //   (dispatch) => ({
  //     add: (data) => dispatch(createIncrementAction(data)),
  //     reduce: (data) => dispatch(createDecrementAction(data)),
  //     addAsync: (data, time) => dispatch(createIncrementActionAsync(data, time)),
  //   }),

  //  mapDispatchToProps的精简写法
  // 就是一个对象
  {
    add: createIncrementAction,
    reduce: createDecrementAction,
    addAsync: createIncrementActionAsync,
  }
)(CounterUI);
