/** array.map: run a function on each element in an initial array before storing it in a final array.
 * Ex: [1,2,3,4] __y=x*x__>>> [1,4,9,16]
 */
var numbers = [1,2,3,4];
var squaredNumbers = numbers.map (function(x)){
  return x*x;
}

