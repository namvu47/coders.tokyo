var a = {
  foo: 'bar'
};

var b = {
  foo: 'bar'
};

console.log(a === b);
// Chạy chương trình và tìm hiểu vì sao kết quả lại là false mặc dù giá trị của 2 object có vẻ giống nhau. Viết câu trả lời ở dưới đây.

/**
 * JS comparison operators can only used to compare  numerical, string, logical, or object VALUES, not array or objects= itself.
 */