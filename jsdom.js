var jsdom    = require("jsdom").jsdom,
    document = jsdom("<html><head></head><body></body></html>"),
    window   = document.createWindow();

var script = document.createElement('script');
script.src = 'http://media.daum.net/common/wing.data';
document.body.appendChild(script);

script.onload = function(){

    var data = window.wing_primary_sisa.component.data,
        length = data.length;

    for(var i=0; i < length; i++){
        console.log( data[i].component.data[0].title );
    }
};
