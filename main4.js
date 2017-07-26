let client = require('cheerio-httpcli');

let printHttpResponse = (word) => client.fetch(
  "http://www.google.com/search"
  ,{q:word}
  ,(err , $ , res, body) => {
    let aList = $("div.rc").find(".r").find("a");
    for(let i = 0 ; i < aList.length ; i++){
//console.log($(aList[i]).text());
    console.log($(aList[i]).attr('href'));
}
  }
);

let keywordList = [
  "신사역 맛집"
  ,"교대역 맛집"
  ,"약수역 맛집"
]
//main



for(let keyword of keywordList){
  printHttpResponse(keyword);

}
