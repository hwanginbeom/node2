let client = require('cheerio-httpcli');
var fs = require('fs');
var writer = fs.createWriteStream('48.txt')


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

    "http://m.schoolinfo.go.kr/disclosure/gongsi63/N100002714/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/B100002364/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/R100003547/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/S100003434/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000492/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/D100000642/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/K100001320/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/P100001150/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/Q100002157/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/K100001967/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/K100001968/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/G100000281/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100003654/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000421/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100005362/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/P100000569/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/S100001035/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/K100002408/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/S100002654/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/T100000288/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/R100001579/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100004008/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/B100005289/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/D100000405/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100003756/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100003655/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/H100000354/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/F100001291/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/K100001817/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/R100003035/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/B100001392/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/B100001393/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/B100000736/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100005775/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/P100000479/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100001379/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100003325/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/R100003548/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/K100003921/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/S100003862/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100007165/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/F100001412/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/E100002270/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/K100003917/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/D100002006/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/G100001293/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100007166/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100006969/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/Q100005554/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/B100006282/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/K100003920/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/P100002713/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/T100000870/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/S100003885/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/H100000743/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/J100006968/63",
"http://m.schoolinfo.go.kr/disclosure/gongsi63/C100002245/63",








  ]

for(let url of urlList){
  printHttpResponse(url, {});
}
