import { DECREMENT, INCREMENT } from "./constant";
// 同步action，返回一般对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 异步action，action值是一函数
export const createIncrementActionAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time);
    }
}