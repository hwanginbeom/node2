let client = require('cheerio-httpcli');
var word = "중학교";
var fs = require('fs');
var writer = fs.createWriteStream('aaa.hwp')



let printHttpResponse = (url, parameter) =>client.fetch(
  url
  ,parameter
  ,(err, $, res, body)=>{
    let a = $("div.location").find("h2")
    console.log($(a).text().replace(/\s/g,''));
    writer.write($(a).text().replace(/\s/g,'')+"\n");
    let aList = $("div.contents").find(".table-responsive").find("td:nth-child(2)")
    for (let i = 1; i<aList.length; i++){

    console.log($(aList[i]).text().replace(/\s/g,''));
    writer.write($(aList[i]).text().replace(/\s/g,''));


  }
  console.log();
  writer.write('\n');
  console.log(aList.length);
}
);
  let urlList=[


    "http://m.schoolinfo.go.kr/disclosure/gongsi63/Q100003934/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000892/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/K100000829/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000349/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000798/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/B100000856/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/C100001202/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/C100001203/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100000944/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100001188/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/B100001165/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/G100000447/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/N100000420/63",


  ]

for(let url of urlList){
  printHttpResponse(url, {});
}
