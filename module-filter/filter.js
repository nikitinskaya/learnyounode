var fs = require('fs');
var path =  require('path'); 

var filter = function(dir, ext, callback) {

  ext = '.' + ext;

  return fs.readdir(dir, function(err, list) {

    if (err) {
       return callback(err);
    }

    var dirlist = [];

    list.forEach(function(file) {

       if (path.extname(file) === ext) {
        dirlist.push(file);
        }
        
    });

    callback(null, dirlist);

});

};

module.exports = filter;