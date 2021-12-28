import { INCREMENT, DECREMENT } from "../constant";
const initCounter = 10;
function counterReducer(preState = initCounter, action) {
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