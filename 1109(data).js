var request = require('request');

var url = 'http://openapi.price.go.kr/openApiImpl/ProductPriceInfoService/getStandardInfoSvc.do';
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=YN%2FkB1CJmRjYOmU%2FDlA2ipfnlQ2Pggr80xmwaHvl24w1majAUr7iaZ1YZ1JQyKQngBra0ND3bPEbSwHckyRpkw%3D%3D'; /* Service Key*/
queryParams += '&' + encodeURIComponent('classCode') + '=ar' + encodeURIComponent('“AR”'); /* 코드 */

request({
    url: url + queryParams,
    method: 'GET'
}, function (error, response, body) {
    console.log('Status', response.statusCode);
    console.log('Headers', JSON.stringify(response.headers));
    console.log('Reponse received', body);
});
