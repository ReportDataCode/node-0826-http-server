const fileSystem = require('fs');
fileSystem.readFile('quotation.txt', function(err, data){
    if (err) {
        return console.error(err);
    }
    else {
    console.log(data.toString());
    }
});
console.log("Program Ended");