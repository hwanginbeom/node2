var request = require('request');
var fs = require('fs');

//target url
var url = "http://krksap.tistory.com";

//file name
var savepath ="krksap.html";
request(url).pipe(fs.createWriteStream(savepath));
