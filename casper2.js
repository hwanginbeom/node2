// 웹사이트 타이틀을 표시하는 프로그램

var TARGET_URL = 'http://m.schoolinfo.go.kr/disclosure/gongsi63/B100004058/63';

// CasperJS 객체 생성
var casper = require('casper').create();

//웹 사이트 열기
casper.start(TARGET_URL, function(){ // 실제 실행은 아님. 방문할 URL 지정 페이지 로드시 수행할 콜백함수 지정
//타이틀 출력
this.echo(casper.getTitle()); //페이지 로드 후, 실행 접속한 사이트 제목을 취득 후 출력
});

casper.run(); //실제 실행
