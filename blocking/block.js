const fileSystem = require('fs');
const data = fileSystem.readFileSync('../Callback-Concept/quotation.txt');

console.log(data.toString());
console.log("program ended;")