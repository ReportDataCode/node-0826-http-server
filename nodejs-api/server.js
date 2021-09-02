// const http = require('http');
const hostName = 'localhost';
const port = process.env.port || 3000;
const express = require('express');
const app = express();
app.use(express.json());
const viewroutes = require('./routes/view');
app.use(viewroutes);

// const server = http.createServer((req, res) => {
//     res.setHeader("Content-Type", "text/plain");
//     res.end("\Welcome to NodeJS!")
// })
const routes = require('./routes/routes');
app.listen(port, hostName, () => {
    console.log(`Server Running At http://${hostName}:${port} `);
})
// 2:33