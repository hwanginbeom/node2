let client = require('cheerio-httpcli');
var word = "중학교";
var fs = require('fs');
var writer = fs.createWriteStream('acc.txt')


var data =','
var data1='<br>'
let printHttpResponse = (url, parameter) =>client.fetch(
  url
  ,parameter
  ,(err, $, res, body)=>{
    let a = $("div.location").find("h2")
    console.log($(a).text().replace(/\s/g,''));

    let aList = $("div.contents").find(".table-responsive").find("td:nth-child(2)")
    aList[0]=writer.write($(a).text().replace(/\s/g,''));
    for (let i = 0; i<aList.length; i++){


    console.log($(aList[i]).text().replace(/\s/g,''));
    writer.write($(aList[i]).text().replace(/\s/g,''));
    writer.write(data);






  }
  writer.write(`\n`);



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
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/C100000955/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/S100001135/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100005704/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/B100000857/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/R100001780/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/R100003134/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/B100005592/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/E100000757/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/K100003956/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/S100000909/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/E100000795/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/D100000554/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/R100002196/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100000877/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100000876/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/S100002940/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/M100001885/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/F100000169/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/K100002325/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/E100000615/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/E100001718/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/G100000448/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100007157/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100001365/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/E100000759/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/N100001195/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100004164/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/S100003459/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000614/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/P100001582/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/C100000599/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/R100001631/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000260/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100007256/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/D100000363/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100005389/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/C100001399/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/R100002882/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/R100001122/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/K100002399/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/N100000421/63",
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/N100000422/63",

  ]

for(let url of urlList){
  printHttpResponse(url, {});
}
