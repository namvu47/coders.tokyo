function sumArr(arr) {
	return arr.reduce (
		(sum, index) => (sum += index),
		0) 
};

module.exports = sumArr;