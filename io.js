var fs = require('fs');
var data = 'file system example!!';
 fs.writeFile('abc.txt', data, 'utf8', function(error)
 { console.log('write end') });
