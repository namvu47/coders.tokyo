/* 
  Viết hàm circleMachine() tính chu vi và diện tích hình tròn khi biết bán kính
*/

function circleMachine(r) {
  result = [];
  result ['Chu vi: '] = 2*Math.PI*r;
  result['Dien tich: '] = Math.PI * r*r;
  return result;
}

circleMachine(3);
// Chu vi: 18.85
// Diện tích: 28.27