/**
 * Đọc và dịch các method đã học từ MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Lấy ví dụ cho các trường hợp input khác nhau của mỗi method
 * Mục đích của bài tập này: Giúp bạn học cách tự tra cứu, đọc tài liệu.
 * Đây là một kĩ năng không thể thiếu của 1 developer.
 */


/** array.concat:  merge two or more arrays. This method does NOT CHANGE the existing arrays, but instead returns a NEW ARRAY.
* var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
*/
// concat nested array:
var num1 = [[1]];
var num2 = [2, [3]];
var nums = num1.concat(num2);
console.log(nums);
// results in [[1], 2, [3]]
// modify the first element of num1
num1[0].push(4);
console.log(nums);
// results in [[1, 4], 2, [3]]


/** array.push: ADD one or more elements to the END of an array and returns the NEW LENGTH of the array.
 * arr.push(element1[, ...[, elementN]])
 */

/** uses apply() to push all elements from a second array.
Do not use this method if the second array (moreVegs in the example) is very large, because the maximum number of parameters that one function can take is limited in practice. See apply() for more details. */
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];
// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']


/** array.pop: removes the LAST element from an array and returns that ELEMENT and CHANGES the length of the array.
 * arr.pop()
 */
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ] 
console.log(popped); // 'sturgeon'


/** array.shift: removes the FIRST element from an array and returns that REMOVED ELEMENT, CHANGES the length of the array. 
 * arr.shift()
*/
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];
while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John


/** array.unshift:  ADDS one or more elements to the beginning of an array and returns the NEW LENGTH of the array.
 * arr.unshift(element1[, ...[, elementN]])
*/
var arr = [1, 2];
arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]
arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]
arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]