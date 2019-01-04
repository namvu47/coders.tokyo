/*

Hãy viết một hàm để kiểm tra xem có thể sắp xếp các kí tự
của 1 chuỗi String cho trước thành 1 chuỗi String cho trước khác không?

Input: 2 chuỗi String
Output: True hoặc False

ví dụ:

Input: abc cba
Output: True

Input: abx abb
Output: False
*/

function rearrangeChar(str1, str2) {
	var newstr1 = str1.split('').sort().join('');
	var newstr2 = str2.split('').sort().join('');
	if (newstr1 === newstr2) {
		return true;
	} else {
		return false;
	}
}
