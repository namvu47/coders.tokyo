// setTimeout
// clearTimeout

function done() {
	console.log('Finish');
}
console.log('Start');
var timeoutID = setTimeout(done, 1000); // wait x milliseconds then run fn

console.log('Done');
clearTimeout(timeoutID);
