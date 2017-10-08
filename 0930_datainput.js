var fs = require('fs');
var data = 'asdfasdfasdfasdf';
 fs.writeFileSync('text.txt', data, 'utf8');
 console.log('writeFileSync completed');
