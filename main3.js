let client = require('cheerio-httpcli');
var word = "신사역 맛집";

let printHttpResponse = () => client.fetch(
  "http://www.google.com/search"
  ,{q:word}
  ,(err , $ , res, body) => {
    let aList = $("div.rc").find(".r").find("a");
    for(let i = 0 ; i < aList.length ; i++){
console.log($(aList[i]).text());
    console.log($(aList[i]).attr('href'));
}
  }
);

//main

printHttpResponse();
