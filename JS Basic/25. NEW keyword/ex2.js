/* 
  viết hàm updateObj để xóa thuộc tính rollno khỏi đối tượng student
  và in ra kết quả
*/

var student = { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12 
};

function updateObj(obj) {
  delete obj.rollno; //delete obj['rollno'];
  return obj;
}

updateObj(); 
/* 
    var student = { 
      name : "David Rayy", 
      sclass : "VI", 
    }; 
*/