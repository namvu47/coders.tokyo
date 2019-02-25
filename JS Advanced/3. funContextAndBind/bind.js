// global context
// func context
// bind

var mouse = {
	name: 'Mickey',
	sayHi: function () {
		console.log('Hi, my name is ', name)
	};
};

mouse.sayHi; // func sayHi
mouse.sayHi(); // Hi, my name is Mickey

var cat = {
	name: "Tom"
};

mouse.sayHi.bind(cat); // this = cat (context of func mouse.sayHi)