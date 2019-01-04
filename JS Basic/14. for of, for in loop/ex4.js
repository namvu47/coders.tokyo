// Giả thiết: numbers là một array các số nguyên
  // Yêu cầu: 
  //	- trả về tổng các số, dùng vòng lặp for ... of
  //  - nếu array trống trả về 0

  function sum(numbers) {
    tong = 0;
    if (typeof (numbers) === 'undefined'){
      tong = 0;
    } else {
      for (var i of numbers) {
        tong = tong + i;
      }
    }
    return tong;
  }

  console.log(sum([])); // 0
  console.log(sum([1])); // 1
  console.log(sum([1,2,3])); // 6
