// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
function capitalize(str) {
	var arr = str.split(' ');
	var newArr = arr.map( i => i.charAt(0).toUpperCase() + i.slice(1) );
	return newArr.join(' ');
}