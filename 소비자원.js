let client = require('cheerio-httpcli');
var fs = require('fs');
var writer = fs.createWriteStream('aaa.hwp');
let printHttpResponse = (url, parameter) =>client.fetch(
  url
  ,parameter
  ,(err, $, res, body)=>{

    let a = $("#schForm > div.fluctuation > div > ul")

        console.log($(a).text().replace(/\s/g,''));
        writer.write($(a).text().replace(/\s/g,'')+'\t');

  };
  writer.write('\n');
  console.log();

  );

  let urlList=[
    "http://m.price.go.kr/tprice/portal/dailynecessitypriceinfo/priceiteminfo/getPriceItemInfoList.do?goodClassCode=030206000&goodSmlclsCode=030206015"

  ]

for(let url of urlList){
  printHttpResponse(url, {});
}
