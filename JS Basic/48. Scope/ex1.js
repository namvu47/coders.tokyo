var a = 1;

function foo() {
  var a = 2;
  return a;
}

function bar() {
  a = 2;
  return a;
}

foo(); // variable 'a' inside func foo and global variable 'a' are 2 different variables
console.log(a); // Kết quả 1
bar(); // func bar takes value of global variable 'a' and change it to '2'
console.log(a); // Kết quả 2
// Giải thích vì sao kết quả dòng 14 lại khác 16 bằng tiếng Việt hoặc tiếng Anh
