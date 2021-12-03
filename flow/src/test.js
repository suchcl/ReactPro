// @flow

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(4, 8));

function split(str) {
    return str.split(" ");
}

console.log(split("Hello flow!")); // 这里调用的时候不会报错，因为flow会进行类型推断，自动推断str参数应该是一个string
// split(12); // 这里会进行报错，因为这里flow进行了类型推断，应该传入一个string，但是实际调用时传入了一个number，所以报错了


function fn(a, b) {
    return a + b;
}

let arr = [1, 2];
fn(arr, false); // flow进行类型检查时报错了，因为数组类型和布尔类型不能进行+操作，哪怕是进行了js内部的类型转换之后都不可以，所以flow做类型检查时报出了异常