let client = require('cheerio-httpcli');
var word = "중학교";
var fs = require('fs');
var officegen = require('officegen');
var xlsx = officegen('xlsx');



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

  console.log();
  console.log(aList.length);
  console.log(list.length);
  console.log(list);

  exportToExcel(list);
}
);
  let urlList=[



    "http://m.schoolinfo.go.kr/disclosure/gongsi63/N100000420/63"


  ]

for(let url of urlList){
  printHttpResponse(url, {});
}

function exportToExcel(list){
  var sheet = xlsx.makeNewSheet();
  sheet.name = "test";
  for (var i = 0 ; i < list.length ;i++){
    if (i==0) {
      var value = list[i];
      //console.log(value);
      sheet.setCell('a' + 1, value);

    }

if (i==1) {
  var value = list[i];
  //console.log(value);
  sheet.setCell('b' + 1, value);

}
if (i==2) {
  var value = list[i];
  //console.log(value);
  sheet.setCell('c' + 1, value);

}
if (i==3) {
  var value = list[i];
  //console.log(value);
  sheet.setCell('d' + 1, value);

}
if (i==4) {
  var value = list[i];
  //console.log(value);
  sheet.setCell('e' + 1, value);

  }
}


  var strm = fs.createWriteStream('C:/Users/user/dev/js/server_side_javascript/test11.xlsx');
  xlsx.generate(strm);

}
