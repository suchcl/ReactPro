/**
 * 1. 该文件用于创建一个专门为Count组件服务的reducer，reducer的本质就是一个函数
 * 2. reducer函数会接收到2个参数分别为：之前的状态preState、动作对象action
 */
const initState = 130;
function countReducer(preState = initState, action) {
    // 初始化的时候，preState为undefined
    // 也可以不通过判断，而是直接给参数设置默认值的方式实现
    // if(preState === undefined){
    //     preState = 0;
    // }
    // 从actions对象中获取：type、data
    const { type, data } = action;
    // 根据type绝对如何加工数据
    switch (type) {
        case "increment":
            return preState + data;

        case "decrement":
            return preState - data;

        default:
            return preState;
    }
}

export default countReducer;