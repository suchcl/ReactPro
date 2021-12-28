import { INCREMENT, DECREMENT } from "./contant";

// 初始化状态值
const initCounter = 10;

function counterReducer(preState = initCounter, action) {
    const { type, data } = action;
    // 根据type值进行数据加工
    switch (type) {
        case INCREMENT:
            let rst = preState + data;
            console.log(rst);
            // return preState + data;
            return rst;

        case DECREMENT:
            return preState - data;

        default:
            return preState;
    }
}

export default counterReducer;