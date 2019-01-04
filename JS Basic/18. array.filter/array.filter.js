/**array.filer: take all the elements in an initial array, and only allow certain elements into a final array.
 * [1,2,3,4] __x%2===0__>>> [2,4]
 */

var numbers = [1, 2, 3, 4];
numbers.filter (function(x){
  return x % 2 === 0;
})