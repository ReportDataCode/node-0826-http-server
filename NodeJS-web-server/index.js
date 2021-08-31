const http = require('http');
const dateModule = require("../local-modules/module-date.js");
const hostName = 'localhost';
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write("Welcome to NodeJS!\n");
    res.write("The date and time are currently:" + dateModule.myDateTime() + "\n");
    res.end('Hello World!\n')
})

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)

})