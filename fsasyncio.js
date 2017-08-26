var fs = require('fs');
var path = process.argv[2];

var filestr = fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    console.log(data.split('\n').length - 1); 
});
