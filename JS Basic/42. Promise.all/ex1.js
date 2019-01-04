/**
 * Sử dụng Promise.all + axios để tải về 3 đường link sau cùng lúc và hiển thị ra kết quả:
 * https://jsonplaceholder.typicode.com/todos/1
 * https://jsonplaceholder.typicode.com/todos/2
 * https://jsonplaceholder.typicode.com/todos/3
 */
var axios = require('axios');

 function dataLoad(str) {
 	return new Promise (function (resolve, reject) {
 		axios.get(str).then(function (datatrave) {
 			resolve(datatrave.data);
 		})
 	})
 }

 Promise.all([
 	dataLoad('https://jsonplaceholder.typicode.com/todos/1'),
 	dataLoad('https://jsonplaceholder.typicode.com/todos/2'),
 	dataLoad('https://jsonplaceholder.typicode.com/todos/3')
 ])
 	.then(function (values) {
 		console.log(values);
 	})
 	.catch(function (err) {
 		console.log(err);
 	})