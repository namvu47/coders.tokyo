/*
  	- Viết hàm findMaxDiff nhận tham số là một mảng integer (mảng số nguyên)
    - Trả về sự khác biệt lớn nhất giữa hai phần tử liền kề của mảng đó.
    - Nếu mảng có 1 phần tử hoặc không có phần tử nào trả về 0
  */

function findMaxDiff(arr) {
	var max = 0;
	for (var i = 1; i <= arr.length; i++) {
		var diff = Math.abs(arr [i] - arr [i-1]);
		if (diff > max) {
			max  = diff;
		}
	}
	return max;
}
 
console.log(findMaxDiff([1, -10, 5, 18, -9, 5]));