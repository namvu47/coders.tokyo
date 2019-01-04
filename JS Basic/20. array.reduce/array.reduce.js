/**array.reduce: combine elements from an initial array into a final value or array of values.
 * arr.reduce(callback[, initialValue]):
 * callback function receiving four arguments:
    accumulator
    currentValue
    currentIndex
    array
* accumulator and currentValue can be one of two values. If initialValue is provided in the call to reduce(), then accumulator will be equal to initialValue, and currentValue will be equal to the first value in the array. If no initialValue is provided, then accumulator will be equal to the first value in the array, and currentValue will be equal to the second.
 */

//https://blog.codeanalogies.com/2018/07/24/javascripts-reduce-method-explained-by-going-on-a-diet/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


let foods = [
  {name: 'steak', calories: 800},
  {name: 'fruit', calories: 200},
  {name: 'salad', calories: 100},
  {name: 'chips', calories: 300},
  {name: 'ice cream', calories: 700},
]; 
  
let total = foods.reduce(function(sum, item){ 
  return sum + item.calories; 
}, 0)
//value of total will be 2100 


let foods = [
  {name: 'steak', calories: 800, carbs: 10, fat: 30},
  {name: 'fruit', calories: 200, carbs: 20, fat: 0},
  {name: 'salad', calories: 100, carbs: 0, fat: 5},
  {name: 'chips', calories: 300, carbs: 10, fat: 10},
  {name: 'ice cream', calories: 700, carbs: 20, fat: 20},
]; 
let total = foods.reduce(function (buckets, item) {
  let calories = item.calories;
  let carbs = item.carbs;
  let fat = item.fat;
  
  buckets['calories'] += calories;
  buckets['carbs'] += carbs;
  buckets['fat'] += fat;
  return buckets;
});
/*total object is
{name: 'steak', calories: 2100, carbs: 60, fat:65}
*/

let total = foods.reduce(function (buckets, item) {
  let calories = item.calories;
  let carbs = item.carbs;
  let fat = item.fat;
 
  buckets['calories'] += calories;
  buckets['carbs'] += carbs;
  buckets['fat'] += fat;
 
  return buckets;
},
{calories: 0, carbs: 0, fat:0}
);

/*total object is
{calories: 2100, carbs: 60, fat:65}
*/