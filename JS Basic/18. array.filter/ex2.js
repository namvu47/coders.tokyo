// Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
  newArr = [];
  for (var i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i];)
    }
  }
  return newArr;
}