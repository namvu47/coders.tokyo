/**
 * Sử dụng sort method để sắp xếp lại 1 array các số sau theo thứ tự giảm dần (descending order)
 */
function sortNumbers(arr) {
  return arr.sort(function(a, b){
    return b - a;
  });
}

sortNumber([5, 1, 3, 2]); // [5, 3, 2, 1]