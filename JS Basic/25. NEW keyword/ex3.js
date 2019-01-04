/* 
  Viết hàm lengthObj để in ra độ dài của một đối tượng
*/

/**
 * Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
 */
function lengthObj(obj) {
  return Object.keys(obj).length;
}

var student = {
  name: "Jerry", 
  age: 14,
  role: "student"
}

console.log (lengthObj(student)); // length: 3