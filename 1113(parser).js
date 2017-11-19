let client = require('cheerio-httpcli');
var fs = require('fs');
var writer = fs.createWriteStream('11_14(1).txt')


var data =','
var data1='<br>'
let printHttpResponse = (url, parameter) =>client.fetch(
  url
  ,parameter
  ,(err, $, res, body)=>{
    let a = $("body > table > thead")
    console.log($(a).text().replace(/\s/g,''));


    let aList = $("body")
    for (let i = 0; i<aList.length; i++){


    console.log($(aList[i]).text().replace(/\s/g,''));
    writer.write($(aList[i]).text().replace(/\s/g,''));
    writer.write(data);






  }
  writer.write(`\n`);



}
);
  let urlList=[

"https://parser-qorhvkzz.c9users.io/hello-world.html" , ]

for(let url of urlList){
  printHttpResponse(url, {});
}
