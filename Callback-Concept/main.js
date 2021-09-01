const fileSystem = require('fs');
const data = fileSystem.readFileSync('quotation.txt');

console.log(data.toString());
console.log("Program Ended");
    