//Viêt 1 function kiểm tra số lương kí tự 'p' và 't' của 
// 1 chuỗi có bằng nhau hay không
//=============================
//input : string
//output : true or false
//=============================

function equal_pt(str){ 
	var pCount = 0, tCount = 0;
	if ( str === '') {
		return 'empty string'
	} else {
		for (var i = 0; i < str.length; i++) {
			if ( str[i] === 'p') {
				pCount ++;
			} else if ( str[i] === 't') {
				tCount ++;
			}
		}	
		if ( pCount === tCount ) {
			return true;
		} else {
			return false;
		}
	}
	
}

console.log(equal_pt('paatpsts'));