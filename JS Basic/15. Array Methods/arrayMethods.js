/**
 * Array Methods:
 * a.concat(b)
 * a.push(b): add b to last element of a
 * a.pop(): remove last element
 * a.shift(): remove the a[0]
 * a.unshift(): insert to beginning of array
 * a.slice: returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
 * a.splice: changes the contents of an array by removing existing elements and/or adding new elements.
 */
var a = [1,3,2];
var b = [10,20];
a.concat(b); // a not changed.
var c = 5;

a.push(c); // 4: return length of new array
// a changed

a.pop(); // 2: return value of popped element
// a changed

a.shift(); // 1: return value of shifted element
// a changed

a.unshift(-1); // return length of new array
// a changed

a.slice (1,2) // return [3]
// a not changed

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']