/* 
  Dùng hàm powerup tính bình phương các số chia hết cho 2 trong mảng truyền vào
*/

function powerup(arr) {
  return (arr.filter (function(x){
    x % 2 === 0;
  })).map(function(x){
    return x*x;
  });
}

powerup([0, 3, 6, 7, 4]); // [0, 3, 36, 7, 16] 