// viết hàm lấy ra giá trị lớn nhất trong 3 số nhập vào
function findMax(a,b,c){
	var max;
	if ( b > c ) {
		max = b
	} else {
		max = c;
	}
	if (a > max ){
		max = a;
	}
	return max;
}