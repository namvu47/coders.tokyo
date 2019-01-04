  // viết hàm first trả về giá trị đầu tiên của mảng, 
  // nếu n được truyền vào thì trả về 1 mảng chứa n giá trị đầu tiên của mảng 
  // (hoặc cả mảng nếu n lớn hơn số phần tử của mảng). 
  // Nếu n <= 0 thì trả về mảng trống.
  // Tham số:
  //	- array: mảng gốc
  //	- n: số phần tử trả về

function first(array, n) {
	var result = []
	if ( n <=0 ) {
		result = [];
	} else if ( n >= array.length ) {
		result = array;
	} else if (typeof n === 'undefined') {
		result = array[0];
	} else {
		for (var i = 0; i < n; i++) {
			result.push(array[i]);
		}
	}
	return result;
}
