const express = require("express");
const app = express();

app.use((request, response, next) => {
    console.log("有人请求服务器了");
    // console.log(request);
    console.log("请求来自：", request.get("Host"));
    console.log("请求地址：",request.url);
    next();
});

app.get("/student", (request, response) => {
    const students = [
        {
            id: "001",
            name: "Tom",
            age: 18
        },
        {
            id: "002",
            name: "jerry",
            age: 19
        },
        {
            id: "003",
            name: "tony",
            age: 20
        }
    ];
    response.send(students);
})

app.listen(5000, (err) => {
    if (!err) {
        console.log("服务器期动了，请求学生信息地址为：http://localhost:5000/student");
    }
});