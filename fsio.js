var fs = require('fs');

var filestr = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(filestr.length - 1);