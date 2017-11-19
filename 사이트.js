var cheerio = require('cheerio');
var request = require('request');

var url = 'http://www.price.go.kr/tprice/portal/main/main.do';
request(url, function(error, response, html){
    if (error) {throw error};

    console.log (html);

});
