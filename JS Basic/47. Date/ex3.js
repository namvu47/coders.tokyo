/**
 * Viết hàm subtractDays trả về 1 ngày trong quá khứ cách ngày được truyền vào n ngày
 */

function subtractDays(date, n) {
	var diff = date.getTime() - n*86400000;
	return new Date (diff);
}

console.log(subtractDays(new Date(), 5));
