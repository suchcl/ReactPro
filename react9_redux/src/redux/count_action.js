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

// 上面的两个函数，可以写成箭头函数形式，
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });