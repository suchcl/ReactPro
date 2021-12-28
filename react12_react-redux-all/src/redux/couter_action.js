import { DECREMENT, INCREMENT } from "./constant";

// 同步action
export const createIncrementAction = data => ({ type: INCREMENT, data });
export const createDecrementAction = data => ({ type: DECREMENT, data });

// 异步action
export const createIncrementActionAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data));
        }, time)
    }
}