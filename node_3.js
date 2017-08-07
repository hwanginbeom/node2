var cheerio = require('cheerio');

var rest = require("restler");

rest.get("http://m.schoolinfo.go.kr/disclosure/gongsi63/M100000892/63", {})

    .on('complete', function(body) {

        $ = cheerio.load(body);

        var arr = [];

        var arrTitle = [];

        $(".eco-table thead tr th").each(function() {

            arrTitle.push($(this).text().trim());

        });

        $(".eco-table tbody tr").each(function() {

            var item = {};

            $(this).find("td").each(function(i) {

                item[arrTitle[i]] = $(this).text().trim();

            })

            arr.push(item);

        });

        console.log(arr);

    });
