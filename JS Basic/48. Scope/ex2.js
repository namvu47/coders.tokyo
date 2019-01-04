var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo(); // calling method foo of object b --> return value "2" of key "a"

var fooCopy = b.foo; // fooCopy is a func log 'this.a' where this is undefined.
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13