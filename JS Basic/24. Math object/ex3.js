/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.

  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
  for (var i = 0; i< arr.length; i++){
    arr[i] = Math.abs(arr[i]);
  };
  return arr;
}

positiveNumber([-2, 3, -4, -7, 10]); // [ 2, 3, 4, 7, 10 ]