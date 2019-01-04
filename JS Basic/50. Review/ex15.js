// make New string from n character top and bottom from old string

function newString(str, n) {
	return str = str.slice(0,n) + str.slice(str.length - n, str.length);
}

console.log(newString('describle',5));