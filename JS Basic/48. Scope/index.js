// keep variable scope at minium.
// do not change parameter of fun

var a = 1;
var b = 2;

function random(x) {
	var b = Math.random();
	console.log(b * x);
}

function doSomething() {
	a = 5;
}

var y = random(a);
