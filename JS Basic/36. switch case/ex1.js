/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
	var newArr = []
	arr.map (function (x) {
		switch (x) {
			case 'A':
			case 'a': 
				newArr.push(1);
				break;
			case 'B':
			case 'b':
				newArr.push(2);
				break;
			default: 
				newArr.push(0);
				break;
		}
	});
	return newArr;
}

transform(['A', 'b', 'a', 'B', 'd']);
// [1, 2, 1, 2, 0]