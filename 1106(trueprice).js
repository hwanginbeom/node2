var request = require('request');

var url = 'http://openapi.price.go.kr/openApiImpl/ProductPriceInfoService/getStandardInfoSvc.do';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=Snkx9%2FkCydbYWBypduIctUnhr8axKCXrG7ai3iSwvbD4Cp4XGKnoGnRbTE0oC1WglsS0DAAMuCtQY%2BjMPXEQaA%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('classCode') + '=' + encodeURIComponent('“AR”'); /* 코드 */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});
