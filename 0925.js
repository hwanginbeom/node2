let client = require('cheerio-httpcli');
var word = "중학교";
var fs = require('fs');
var officegen = require('officegen');
var xlsx = officegen('xlsx');


var count = 0
let printHttpResponse = (url, parameter) =>client.fetch(
  url
  ,parameter
  ,(err, $, res, body)=>{
    let a = $("div.location").find("h2")
    console.log($(a).text().replace(/\s/g,''));
    var list=[];

    let aList = $("div.contents").find(".table-responsive").find("td:nth-child(2)")
    for (let i = 1; i<aList.length; i++){
    var value = $(aList[i]).text().replace(/\s/g,'');
    list[0]=$(a).text().replace(/\s/g,'');
    list[i] = value;

    console.log($(aList[i]).text().replace(/\s/g,''));
    list.push(value);
    //console.log(aList[i]);


  }
  count++;

  console.log();
  console.log(aList.length);
  console.log(list.length);
  console.log(list);

  exportToExcel(list,count);
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
    "http://m.schoolinfo.go.kr/disclosure/gongsi63/J100000944/63"


  ]

for(let url of urlList){
  printHttpResponse(url, {});
}

function exportToExcel(list,count){
  if(count==1){
    var sheet = xlsx.makeNewSheet();
  sheet.name = "test";
}
  for (var i = 0 ; i < list.length ;i++){
    if (i==0) {
      var value = list[i];
      //console.log(value);
      sheet.setCell('a' + count, value);

    }

if (i==1) {
  var value = list[i];
  //console.log(value);
  sheet.setCell('b' + count, value);

}
if (i==2) {
  var value = list[i];
  //console.log(value);
  sheet.setCell('c' + count, value);

}
if (i==3) {
  var value = list[i];
  //console.log(value);
  sheet.setCell('d' + count, value);

}
if (i==4) {
  var value = list[i];
  //console.log(value);
  sheet.setCell('e' + count, value);

  }
}


  var strm = fs.createWriteStream('C:/Users/user/dev/js/server_side_javascript/test11.xlsx');
  xlsx.generate(strm);

}
