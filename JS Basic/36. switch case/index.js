/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
	var newArray = arr.map (function (x) {
		switch (x) {
			case 'A':
			case 'a': 
				return x = 1;
				break;
			case 'B':
			case 'b':
				return x = 2;
				break;
			default: 
				return x = 0;
				break;
		}
	});
	return newArray;
}

console.log(transform(['A', 'b', 'a', 'B', 'd']));
// [1, 2, 1, 2, 0]