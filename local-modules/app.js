var myLogModule = require('./Log.js');
var data = require('./data.js');
var person = require("../export-modules/person.js");

myLogModule.info('Node.js started');
console.log(data.firstName + '' + data.lastName);
