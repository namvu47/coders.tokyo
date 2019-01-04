/**
 * Sử dụng node co + axios để tải về các đường link sau theo 2 cách:
 */

var axios = require('axios');
var co = require('co');
var urls = [
  'https://jsonplaceholder.typicode.com/todos/1',
  'https://jsonplaceholder.typicode.com/todos/2',
  'https://jsonplaceholder.typicode.com/todos/3',
  'https://jsonplaceholder.typicode.com/todos/4',
  'https://jsonplaceholder.typicode.com/todos/5'
];

// Cách 1: Sử dụng vòng lặp for

function loadLinkPromise(path) {
	return new Promise (function (resolve, reject) {
		axios.get(path).then(function (datatrave) {
			resolve(datatrave.data);
		})
	})
}

co(function*() {
	var arr = [];
	for (var i of urls) {
		arr.push(yield loadLinkPromise(i));
	}
	return arr;
}).then(function (values) {
	console.log(values);
})


// Cách 2: Sử dụng array.map
// Gợi ý: Có thể yield 1 array các Promise

var loadLinks = co.wrap(function*(links) {
	var values = yield links.map(function (link) {
		return loadLinkPromise(link);
	})
	return values;
})

loadLinks(urls)
	.then(function (values) {
		console.log(values);
	})