var client = require('cheerio-httpcli');
var officegen = require('officegen');
var xlsx = officegen('xlsx');
var fs = require('fs');

var url = "http://m.schoolinfo.go.kr/disclosure/gongsi63/Q100003934/63";
var param = {};

let printHttpResponse = (url, parameter) =>client.fetch(
  url
  ,parameter
  ,(err, $, res, body)=>{
    let a = $("div.location").find("h2")
  var list_dl = $("div.contents").find(".table-responsive").find("td:nth-child(2)");
  //console.log(list_dl);
  var list = [];
  for (var i = 0 ; i < list_dl.length ;i++){
    var value = $(list_dl[i]).html();
    console.log(value);
    list.push(value);

  }
  exportToExcel(list);
});


function exportToExcel(list){
  var sheet = xlsx.makeNewSheet();
  sheet.name = "test";

  for (var i = 0 ; i < list.length ;i++){

    var value = list[i];
    console.log(value);
    sheet.setCell('a' + i+1, value);
  }

  var strm = fs.createWriteStream('C:/Users/user/dev/js/server_side_javascript/test1.xlsx');
  xlsx.generate(strm);

}
