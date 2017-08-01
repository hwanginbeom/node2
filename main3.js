let client = require('cheerio-httpcli');

let printHttpResponse = () => client.fetch(
  "http://m.schoolinfo.go.kr/disclosure/topics/result?hgNmEncUri=%25ED%2595%2599%25EA%25B5%2590&gongsiNo=01&sidoCode=1100000000&gugunCode=&hgNm=%ED%95%99%EA%B5%90"

  ,(err , $ , res, body) => {
    let aList = $("div.rc").find(".r").find("a");
    for(let i = 0 ; i < aList.length ; i++){
console.log($(aList[i]).text());
    console.log($(aList[i]).attr('href'));
}
  }
);

//mai

printHttpResponse();
