// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
// Promise: constructor fun

// var fs = require ('promise-fs');

// function onDone(song) {
// 	console.log(song);
// }

// function onError(err) {
// 	console.log(err);
// }

// function readFile(path) {
// 	return fs.readFile(path, { encoding : 'utf8'});
// }

// readFile ('song1.txt')
// 	.then(onDone);
// 	.then(function () {
// 		return readFile('song2.txt');
// 	})
// 	.then(onDone);
// 	.catch(onError);

var fs = require ('fs');

function readFilePromise(path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, { encoding : 'utf8'}, function (err, data) {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		})
	})
}	

readFilePromise ('song1.txt')
	.then(function (song1) {
		console.log(song1);
	})
	.catch(function (err) {
		console.log(err);
	})