var page = require('webpage').create();
page.open('http://m.schoolinfo.go.kr/disclosure/topics/result?hgNmEncUri=%25EC%25A4%2591%25ED%2595%2599%25EA%25B5%2590&gongsiNo=01&sidoCode=1100000000&gugunCode=&hgNm=%EC%A4%91%ED%95%99%EA%B5%90', function (status) {
    if (status) {
        var html = page.content;
        console.log(html);
    };
    phantom.exit();
});
