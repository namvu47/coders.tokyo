/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất 
trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/

function getMaxOfArr (numArr) {
	return Math.max.apply(null, numArr);
}

function findMostFrequent(arr) {
	var element = [], freq = [], prev;
	arr.sort();

	for ( var i = 0; i < arr.length; i++ ) {
		if ( arr[i] !== prev ) {
			element.push(arr[i]);
			freq.push(1);
		} else {
			freq[freq.length-1]++;
		}
		prev = arr[i];
	}

	var maxFreq = getMaxOfArr(freq);
	var idx = freq.indexOf(maxFreq);
	var indices = [];
	while ( idx !== -1) {
		indices.push(idx);
		idx = freq.indexOf( maxFreq, idx + 1 )
	}

	var result = [];
	for (var i = 0; i < indices.length; i++ ) {
		result.push(element[indices[i]]);
	}
	return result.sort( (a, b) => a - b );
}

console.log(findMostFrequent([ 0, 16, 23, 10, 7, 32, 36, 5, 38, 7, 31, 13, 23, 16, 14, 26, 13, 37, 36, 26 ]));