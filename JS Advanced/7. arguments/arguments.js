// array-like obj and argument

const obj = {
	0: 'Mint',
	1: 'Big',
	length: 2
};

function sum() {
	let numbers = Array.from(arguments); // transform array-like obj to array
	numbers.reduce(function (sum, num) {
		return sum + num; 
	}, 0);
};

sum(1, 2, 4, 7, 10);