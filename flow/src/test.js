// @flow

function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(4, 8));

function split(str) {
    return str.split(" ");
}

console.log(split("Hello flow!")); // 这里调用的时候不会报错，因为flow会进行类型推断，自动推断str参数应该是一个string
split(12); // 这里会进行报错，因为这里flow进行了类型推断，应该传入一个string，但是实际调用时传入了一个number，所以报错了