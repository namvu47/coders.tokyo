// JSON object
// 1. stringify: convert an object to an JSON string
// 2. parse: convert JSON string to an object

var myDog = {
	name: 'Big',
	age: 2,
	isPicky: true
}

var myDogString = JSON.stringify(myDog);
console.log(typeof myDogString);

var myCatString = '{"name": "Tom", "age":2, "dead":true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);