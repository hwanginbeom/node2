var request = require("request");
var url = "http://www.nike.co.kr/display/displayShop.lecs?stonType=P";

request(url, function(error, response, body) {
  if (error) throw error;
    console.log(body);
  });
