/**
 * Sử dụng module `request` (https://www.npmjs.com/package/request) để tải dữ liệu từ đường link sau về và hiển thị ra màn hình:
 * https://randomuser.me/api/
 * 
 * Sử dụng console.time và console.timeEnd để hiển thị ra thời gian tải link. Tìm hiểu về 2 hàm này tại: https://alligator.io/js/console-time-timeend/
 * hoặc google 'console.time'
 */

 var request = require('request');

console.time("Time this");

 request (' https://randomuser.me/api/', function (err, response, body) {
 	console.log('error: ', err);
 	console.log('statusCode: ', response && response.statusCode);
 	console.log('body: ', body)
 });

 console.timeEnd ('Time this');