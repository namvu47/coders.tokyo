/* Maximum possible sum of some of its k consecutive numbers 
(numbers that follow each other in order.) of a given array of positive integers
*/

function removeDupArr(arr) {
	return arr.filter( (elem, pos, arr) => arr.indexOf(elem) == pos );
}


function maxOfSumChain(arr,k){
	var sortedArr = arr.sort( (a, b) => a - b );
	var uniqueArr = removeDupArr(arr);
	if ( k <= uniqueArr.length ) {
		return sum = uniqueArr.slice(uniqueArr.length - k, uniqueArr.length).reduce ( (a, b) => a + b, 0);
	} else {
		return sum = sortedArr.slice(sortedArr.length-k, sortedArr.length).reduce ( (a, b) => a + b, 0 );
	}
}

console.log(maxOfSumChain([1,3,2,6,2],3));