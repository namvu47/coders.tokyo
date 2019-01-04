// Viết hàm pyString để tạo chuỗi mới thêm "Py" trước chuỗi nhập vào. 
// Nếu chuỗi đã cho đã bắt đầu bằng "Py" thì hãy trả về chuỗi gốc (không cần thêm).
// Tham số:
// - String: chuỗi nhập vào lúc đầu.

function pyString(String) {
	result = '';
	if ( String.substring(0,2) === 'Py') {
		result = String;
	} else {
		result = 'Py' + String;
	}
	return result; 
}

console.log(pyString('PyHello'))