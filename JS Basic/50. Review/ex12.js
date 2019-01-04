//Viết một hàm JavaScript có 1 tham số n trả về tuyệt đối của hiệu só đó và 13, 
// nếu số đó lớn hơn 13 trả về gấp đôi tuyệt đối của hiệu 2 số.

function difference(n) {
	var result = 0;
	if ( n < 13 ) {
		result = Math.abs(n-13)
	} else {
		result = (n-13) *2;
	}
	return result;
}