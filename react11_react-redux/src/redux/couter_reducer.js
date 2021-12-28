import { DECREMENT, INCREMENT } from "./constant";

let initData = 2;
function counterReducer(preState = initData, action) {
    const { type, data } = action;
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState;
    }
}

export default counterReducer;