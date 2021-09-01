const http = require('http');
const exportmodule = require('../export-module/exportmodule.js');
const dateModule = require("../local-modules/module-date.js");
const hostName = 'localhost';
const port = process.env.port || 3000;
const person = new exportmodule("Juan", "Dela Cruz", 20);

console.log(person.info());

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write("Welcome to NodeJS!\n");
    res.write("The date and time are currently:" + dateModule.myDateTime() + "\n");
    res.write(person.info() + '\n');
    res.write(person.info() + '\n');
    res.end(`Hello, ${person.firstName}!\n`)
})

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`)

})