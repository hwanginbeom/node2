var request = require("request");
var cheerio = require('cheerio');

var url = 'http://m.schoolinfo.go.kr/disclosure/topics/result?hgNmEncUri=%25EC%25A4%2591%25ED%2595%2599%25EA%25B5%2590&gongsiNo=63&sidoCode=&gugunCode=&hgNm=%EC%A4%91%ED%95%99%EA%B5%90';

request.get(url, function (error, response, html) {
    if (error) throw error;
    console.log(html);
});
