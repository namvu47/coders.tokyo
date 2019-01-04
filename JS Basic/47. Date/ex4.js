/**
 * Tính số ms chênh lệch giữa 2 date object bất kì
 */
function diffMs(a, b) {
	return diff = a.getTime() - b.getTime();
}
// viết ví dụ để kiểm tra

var date1 = new Date();
var date2 = new Date('2018-11-15 00:00');

console.log(diffMs(date1,date2));