var request = require("request");

3
4
var url = "http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000892/63";
request(url, function(error, response, table){

  console.log(table);
});
