var request = require("request");

var url = "file:///C:/Users/user/Desktop/startbootstrap-shop-homepage/index.html";

request(url, function(error, response, body) {
  if (error) throw error;
    console.log(body);
  });
