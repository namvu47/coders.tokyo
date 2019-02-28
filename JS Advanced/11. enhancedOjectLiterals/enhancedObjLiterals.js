// constructor func
function Mouse(name) {
	this.name = name
};

Mouse.prototype.run = function () {
	console.log (`${this.name} is running`)
};

const mickey = new Mouse('mickey');
mickey.run();


// object literals
const jerry = {
	name: "jerry",
	run: function () {
		console.log(`${this.name} is running`)
	}
};

jerry.run();


// enhanced object literals
const name = 'Tom';
const cat = {
	name, // name: name
	run() {
		console.log(`${this.name} is running`)
	}
};