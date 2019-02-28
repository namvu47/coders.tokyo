// func.apply(this, [param1, param2, ...])

function sum() {
	const numbers = Array.from(arguments);
	return numbers.reduce((sum, num) => sum +num, 0);
};

function average() {
	//sum
	const x = sum.apply(null, arguments);
	// sum / arguments.length
	return x/arguments.length;
}