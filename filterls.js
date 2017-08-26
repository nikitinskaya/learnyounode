var fs = require('fs');
var path =  require('path'); 

var input_dir = process.argv[2];
var input_ext = '.'.concat(process.argv[3]);

var filestr = fs.readdir(input_dir, function(err, list) {
    if (err) {
        return console.log(err);
    }

    list.forEach(function(file) {

        if (path.extname(file) === input_ext) {
            console.log(file);
        }
        
    });

    /*
    // also works, but forEach is better

    for (var i in list) {
        if (path.extname(list[i]) === input_ext) {
            console.log(list[i]);
        }
        else continue;
    }*/
    
});




