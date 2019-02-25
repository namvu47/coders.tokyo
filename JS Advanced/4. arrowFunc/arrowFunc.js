// arrow func expression


var sum = (a, b) => {
	return a+b
};

var sum1 = (a, b) => a+b;

var square = x => x*x;

var arr = [1, 2, 3];

arr.map(x => x*x);

var a = {
	name: "Big",
	run: function () {
		// context is object a
		var run2 = function () {
			console.log(this.name) // this = run
		}.bind(this); //bind(a)
		run2();
	}
};

var a1 = {
	name: "Big",
	run: function () {
		var that = this;
		var run2 = function () {
			console.log(that.name)
		};
		run2();
	}
};

var a2 = {
	name: "Big",
	run: function () {
		var run2 = () => console.log(this.name);// arrow func: 'this' get 'this' context of closest func (run)
		run2();
	}
};