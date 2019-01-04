/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
function diff(fromDate, toDate) {
  return ((toDate - fromDate)/86400000).toFixed(2);
}

var start = new Date('2018/11/15');
var end = new Date();

console.log(diff(start, end));