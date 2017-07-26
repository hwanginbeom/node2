let client = require('cheerio-httpcli');
var word = "신사역 맛집";

let printHttpResponse = () => client.fetch(
  "http://www.google.com/search"
  ,{q:word}
  ,(err , $ , res, body) => {
    console.log(body);
  }
);

//main

printHttpResponse();
