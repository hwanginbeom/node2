let client = require('cheerio-httpcli');
var word = "신사역 맛집";

let printHttpResponse = () => client.fetch(
  "http://www.google.com/search"
  ,{q:word}
  ,(err , $ , res, body) => {
    let aList = $("div.rc").find(".r").find("a");
console.log($(aList[0]).text());
    console.log($(aList[0]).attr('href'));
  }
);

//main

printHttpResponse();
