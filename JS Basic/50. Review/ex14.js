// Viết hàm toNextChar dùng để thay thế mọi ký tự trong một chuỗi thành ký tự theo sau nó trong bảng chữ cái. Ví dụ: "Hello" chuyển thành "Ifmpp"
// Tham số:
// - String: chuỗi nhập vào ban đầu.
function toNextChar(str) {
	for ( var i = 0; i < str.length; i++) {
		str = str.replace( str[i] , String.fromCharCode(str.charCodeAt(i) + 1));
	}
	return str;
}

console.log(toNextChar('Hello'));

