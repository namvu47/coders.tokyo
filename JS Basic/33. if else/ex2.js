/**
 * Viết hàm isTruthy nhận vào 1 giá trị, trả về true nếu giá trị đó là 1 giá trị truthy, còn không thì trả về false
 * Gợi ý: Nếu không hiểu truthy là gì hãy google với từ khoá `truthy falsy`
 */

/** falsy value: 
* Boolean: false
* Number: 0, NaN (Not a Number)
* String: ''
* null, undefined:
*/

function isTruthy(x) {
	result = true;
	if ((x === false) || (x === 0) || (x === '') || (x === null) || (x === undefined) ){
		result = false;
	};

	return result;
}

console.log(isTruthy(true));
console.log(isTruthy('0'));
console.log(isTruthy([]));
console.log(isTruthy(1));