var fs = require('fs');
var path =  require('path'); 

var filter = function(dir, ext, callback) {

  ext = '.' + ext;

  return fs.readdir(dir, function(err, list) {

    if (err) {
       return callback(err);
    }


    list = list.filter(function(file) {
       return path.extname(file) === ext;      
    });

    callback(null, list);

});

};

module.exports = filter;