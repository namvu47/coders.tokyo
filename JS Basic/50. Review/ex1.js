function reverse(str) {
	var arr = [];
	for (var i = 1; i <= str.length; i++) {
		arr.push (str[str.length-i]);
	}
  return arr.join('');

}

