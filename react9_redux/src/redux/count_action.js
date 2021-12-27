/**
 * 该文件专门为count组件生成action对象
 */
import { INCREMENT,DECREMENT } from "./constant";

// function createIncrementAction(data){
//     return {
//         type: "increment",
//         data
//     }
// }

// function createDecrementAction(data){
//     return {
//         type："decrement",
//         data
//     }
// }

// 上面的两个函数，可以写成箭头函数形式
// 同步anction，就是指action值为一般Object对象
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });

// 异步action，是指action值为函数的action
// 异步action中，一般都会调用同步action
// 异步action不是必须要用的，根据业务场景来确定是否需要的
export const createIncrementAsyncAction = (data,time) => {
    return (dispatch) => {
        setTimeout(()=>{
            // 联系redux，加工数据
            // dispatch({type:INCREMENT,data}); // 也可以通过调用同步任务的方式实现
            dispatch(createIncrementAction(data));
        },time);
    }
}