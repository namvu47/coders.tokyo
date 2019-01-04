/** array.find: return the FIRST result meet requirement.
 */

var numbers = [1, 2, 3, 4];
numbers.find(function(number){
  return number % 2 === 0;
})