// func.call(this, param1, param2,...)

function greeting() {
	console.log(`Hi, ${this.name}. I am ${this.age}`);
}

var cat = {
	name: 'Tom',
	age: '10'
};

greeting.call(cat);