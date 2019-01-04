var a = 10;
var b = 18;

var x = a--+b++-++b-++a;
console.log(x);
// Nhấn Run để chạy code
// Thêm cách dấu cách vào dòng 4 để code dễ đọc hơn
// Giải thích tại sao kết quả lại như vậy. Gợi ý: Viết ra từng dòng để giải thích

// 10 + b++ - ++b - ++a /9
// 10 + 18 - ++b - ++a /9,19
// 10 + 18 - 20 - ++a /9,20
// 10 + 18 - 20 - 10 = -2 /10,20