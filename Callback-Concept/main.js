const fileSystem = require('fs');
const data = fileSystem.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
    