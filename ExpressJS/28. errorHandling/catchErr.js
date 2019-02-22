// function add(a, b) {
// 	if (typeof a !== "string" || typeof b !== "string") {
// 		throw new Error('Wrong Type')
// 	};
// 	return a+b;
// }

// try {
// 	var result = add('abc', 1);
// } catch (error) {
// 	console.error(error)
// }

function reject() {
	return new Promise (function (resolve, reject) {
		reject (new Error ('Promise Error'));
	});
}

reject().catch();

