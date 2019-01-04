/**
 * Viết hàm xếp hạng theo điểm số theo công thức sau:
 * [0-5): C
 * [5-7): B
 * [7-10]: A
 */
function grade(score) {
	var result;
	if (score >= 0 && score < 5) {
		result = 'C';
	} else if (score >= 5 && score < 7) {
		result = 'B';
	} else {
		result = 'A';
	}
	return result;
}

console.log(grade(4)); // C
console.log(grade(5)); // B