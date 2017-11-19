console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://www.naver.com';
page.open(url, function (status) {
  //Page is loaded!
  page.render('./file/image.jpg');
  phantom.exit();
});
