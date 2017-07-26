let client = require('cheerio-httpcli');
let printHttpResponse = (url ,parameter) =>client.fetch(

url
,parameter
  ,(err, $ , res , body)=>{
    console.log(body);
    let aList = $("div.rc").find(".r").find("a");
    for(let i = 0 ; i < aList.length ; i++){
    //console.log($(aList[i]).text());
    console.log($(aList[i]).attr('href'));
  }
}
);

let keywordList = [
  "신사역 맛집"
  ,"교대역 맛집"
  ,"약수역 맛집"
]

//main
for(let keyword of keywordList ){
//printHttpResponse("http://www.google.com/search",{q:keyword});
}

let urlList= [
"http://keywordtool.io/",
"https://adwords.google.com/home/tools/keyword-planner/",
"https://support.google.com/adwords/answer/6325025?hl=en",
"https://kwfinder.com/",
"https://moz.com/explorer",
"https://moz.com/beginners-guide-to-seo/keyword-research",
"https://www.wordstream.com/keywords",
"https://en.wikipedia.org/wiki/Keyword",
"https://serps.com/tools/keyword-research/",
"http://keywordtool.io/",
"https://adwords.google.com/home/tools/keyword-planner/",
"https://support.google.com/adwords/answer/6325025?hl=en",
"https://kwfinder.com/",
"https://moz.com/explorer",
"https://moz.com/beginners-guide-to-seo/keyword-research",
"https://www.wordstream.com/keywords",
"https://en.wikipedia.org/wiki/Keyword",
"https://serps.com/tools/keyword-research/",
"http://keywordtool.io/",
"https://adwords.google.com/home/tools/keyword-planner/",
"https://support.google.com/adwords/answer/6325025?hl=en",
"https://kwfinder.com/",
"https://moz.com/explorer",
"https://moz.com/beginners-guide-to-seo/keyword-research",
"https://www.wordstream.com/keywords",
"https://en.wikipedia.org/wiki/Keyword",
"https://serps.com/tools/keyword-research/"
]

for(let url of urlList ){
printHttpResponse(url,{});
}
