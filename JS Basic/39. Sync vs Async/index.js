//https://medium.com/@kvosswinkel/is-javascript-synchronous-or-asynchronous-what-the-hell-is-a-promise-7aa9dd8f3bfb

// https://www.youtube.com/watch?v=8aGhZQkoFbQ

var fs = require('fs');

console.log('Start');
fs.readFile('song1.txt', { encoding: 'utf8'}, function (err, song1) {
	console.log(song1);
} )

console.log('End');
// Start End Song1

// Read/Write to fs
// Network