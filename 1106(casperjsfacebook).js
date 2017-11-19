var fs = require('fs')

var casper = require('casper').create({
    pageSettings: {
        loadImages: false, // 이미지 로딩은 하지 않음
        loadPlugins: false, // 플러그인 로딩은 하지 않음
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});

//Facebook 열기
casper.start().thenOpen("https://facebook.com", function() {
    console.log("Facebook website opened");
});

//Facebook 로그인
casper.then(function(){
    console.log("해당 id와 pw로 로그인 합니다.");
    this.evaluate(function(){
        document.getElementById("email").value="rydn2002";
            document.getElementById("pass").value="dlsqja5511";
            document.getElementById("loginbutton").children[0].click();
    });
});

//스크린샷 찍고 페이지 저장하기
casper.then(function(){
    console.log("6초 후에 AfterLogin.png 으로 저장됩니다.");
    this.wait(6000, function(){
      this.capture('AfterLogin.png');
      fs.write("./hello.html", this.getHTML(), "w")
    });
});

//이미지 주소 받아오기
casper.then(function(){
    var images = this.evaluate(function(){
        var facebookImages = document.getElementsByTagName('img');
        var allSrc = [];
        for(var i = 0; i < facebookImages.length; i++) {
            if(facebookImages[i].height >= 100 && facebookImages[i].width >= 100)
                allSrc.push(facebookImages[i].src);
        }
        return JSON.stringify(allSrc);
    });
    console.log(images);
})

casper.run();
