/**
 * Tạo 1 hàm doAfter nhận vào 2 tham số:
 *  - Tham số thứ 1: 1 function
 *  - Tham số thứ 2: Thời gian x (ms)
 * Hàm này sẽ gọi function sau 1 khoảng thời gian x ms
 */

 function doAfter(callback, time) {
 	setTimeout(callback, time);
 }

 function callback() {
 	console.log('Do something...');
 }

doAfter(callback, 1000);