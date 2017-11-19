var client = require('cheerio-httpcli');
var officegen = require('officegen');
var xlsx = officegen('xlsx');
var fs = require('fs');

var url = "http://m.schoolinfo.go.kr/disclosure/gongsi63/Q100003934/63";
var param = {};

client.fetch(url, param, function(err, $, res){
  if(err){console.log("error:", err); return;}

  var body = $.html();

  var re = /성형/g;
  var found = body.match(re);
  //console.log(body);
  //console.log(found);
  //console.log(found.length);

});


client.fetch(url, param, function(err, $, res){
  if(err){console.log("error:", err); return;}

  var body = $.html();
  var list_dl = $(".sh_blog_passage");
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

if (i==0) {
  var value = list[i];
  console.log(value);
  sheet.setCell('a' + 1, value);

}
if (i==1) {
  var value = list[i];
  console.log(value);
  sheet.setCell('b' + 1, value);

}
if (i==2) {
  var value = list[i];
  console.log(value);
  sheet.setCell('c' + 1, value);

}
if (i==3) {
  var value = list[i];
  console.log(value);
  sheet.setCell('d' + 1, value);

}
if (i==4) {
  var value = list[i];
  console.log(value);
  sheet.setCell('e' + 1, value);

}
if (i==5) {
  var value = list[i];
  console.log(value);
  sheet.setCell('f' +1, value);

}
if (i==6) {
  var value = list[i];
  console.log(value);
  sheet.setCell('g' + 1, value);

}
if (i==7) {
  var value = list[i];
  console.log(value);
  sheet.setCell('h' + 1, value);

}
if (i==8) {
  var value = list[i];
  console.log(value);
  sheet.setCell('i' + 1, value);

}
if (i==9) {
  var value = list[i];
  console.log(value);
  sheet.setCell('j' + 1, value);

}

  }
console.log(list.length);
  var strm = fs.createWriteStream('C:/Users/user/dev/js/server_side_javascript/test3.xlsx');
  xlsx.generate(strm);

}
