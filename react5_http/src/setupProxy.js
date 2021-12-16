const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api', // 请求地址中有/api的请求就会触发该转发配置
        createProxyMiddleware({
            target: 'http://localhost:5000', // 请求转发的目标服务器
            /**
             * 控制服务器中收到的请求头中的Host字段的值，该属性加和不加，一般情况下不会影响到服务器下发数据
             * 默认为false
             * 如果设置为true，则服务器中收到的请求头中Host字段值为代理服务器的地址
             * 如果设置为false，则服务器中收到的请求头中的Host为客户端服务器的地址
             * 一般情况下，都会显示设置为true
             */
            changeOrigin: true,
            // 该项必须配置，要将前面通配的/api重置为空，否则服务器中匹配不到响应的服务端路由
            // 重写下请求url
            pathRewrite: {
                '^/api': '' // 将/api 变为 ''
            }
        })
    );
    app.use(
        '/api2',
        createProxyMiddleware({
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: {
                '^/api2': '' // 将/api2 变为 ''
            }
        })
    );
};