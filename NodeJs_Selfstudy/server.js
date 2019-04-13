const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3000 ;

const server = http.createServer(app); // xử lý yêu cầu khi nhận được là app
server.listen(port);