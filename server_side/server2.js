const express = require("express");
const app = express();

app.use((request, response, next) => {
    console.log("有人请求服务器2了");
    next();
});

app.get("/cars", (request, response) => {
    const cars = [
        {
            id: "001",
            name: "奔驰",
            price: 199
        },
        {
            id: "002",
            name: "马自达",
            price: 119
        },
        {
            id: "003",
            name: "奥拓",
            price: 59
        }
    ];
    response.send(cars);
});

app.listen(5001,(err) => {
    if(!err){
        console.log("服务器2启动了，请求地址为：http://localhost:5001/cars");
    }
});