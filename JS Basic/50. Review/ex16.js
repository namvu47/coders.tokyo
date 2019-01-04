// Make new array form from the middle element of two array

function middleArray(arr1,arr2){
	return [arr1 [arr1.length % 2], arr2[arr2.length % 2]];
}

console.log(middleArray([1,3,2], [4,5,6]));