/* 
  Viết hàm trigonim để in ra 3 giá trị sin cos tan của một số nhập vào
*/

function trigonim(number) {
  var sinNumber = Math.sin(number);
  var cosNumber = Math.cos(number);
  var tanNumber = Math.tan(number);
  return [sinNumber, cosNumber, tanNumber];
}

trigonim(45);
// Sin(45) = 0.850
// Cos(45) = 0.525
// Tan(45) = 1.619