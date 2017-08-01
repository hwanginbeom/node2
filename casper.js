
// filename : app.js
// author : saltfactory@gmail.com
casperPath = 'path/to/node_modules/casperjs';
var casper = require('casper').create();

function getTodayCount(){
    return document.querySelector('#side_today_count').innerText;
}


casper.start('http://blog.saltfactory.net', function(){
   var side_today_count = this.evaluate(getTodayCount);
console.log("오늘의 방문자 수 : " + side_today_count);
})


casper.run();
