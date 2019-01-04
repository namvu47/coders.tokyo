// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(arr){
  var result;
  for (i = 0; i < arr.length; i++){
    if (arr[i] % 2 === 0) {
      result = arr[i];
      break;
    } else {
      result = undefined;
    }
  }
  return result;
}