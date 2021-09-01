const http = require('http');
const hostName = 'localhost';
const port = process.env.port || 3000;
const server = http.createServer((req, res) => {
    res.setHeader("Content Type", "text/plain");
    res.end("\Welcome to NodeJS!")

})
server.listen(port, hostName, () => {
    console.log(`Server Running At http://${hostName}:${port} `);
})